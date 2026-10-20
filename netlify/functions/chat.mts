import type { Config, Context } from "@netlify/functions";

const XAI_API_URL = "https://api.x.ai/v1/chat/completions";
const DEFAULT_MODEL = "grok-3-mini";

const SYSTEM_PROMPT =
  "You are Grok Bot, a helpful and slightly witty assistant. Keep answers concise and friendly.";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

function demoReply(userText: string): string {
  const trimmed = userText.trim();
  if (!trimmed) {
    return "I'm running in demo mode. Set the XAI_API_KEY environment variable to get live Grok replies.";
  }
  return (
    `Demo mode reply: I heard you say "${trimmed}". ` +
    "Set the XAI_API_KEY environment variable to connect me to the real xAI Grok API."
  );
}

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let payload: { messages?: ChatMessage[] };
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (messages.length === 0) {
    return new Response("`messages` array is required", { status: 400 });
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const apiKey = Netlify.env.get("XAI_API_KEY");

  if (!apiKey) {
    return Response.json({ reply: demoReply(lastUser?.content ?? ""), demo: true });
  }

  try {
    const upstream = await fetch(XAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: Netlify.env.get("XAI_MODEL") ?? DEFAULT_MODEL,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: false,
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text();
      return new Response(`Upstream xAI error (${upstream.status}): ${detail}`, {
        status: 502,
      });
    }

    const data = await upstream.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return new Response("Empty response from xAI", { status: 502 });
    }

    return Response.json({ reply, demo: false });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(`Failed to reach xAI: ${message}`, { status: 502 });
  }
};

export const config: Config = {
  path: "/api/chat",
  method: ["POST"],
};
