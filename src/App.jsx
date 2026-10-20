import { useEffect, useRef, useState } from "react";

const WELCOME = {
  role: "assistant",
  content: "Hey, I'm Grok Bot. Ask me anything to get started.",
};

export default function App() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [demoMode, setDemoMode] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.filter((m) => m.role !== "assistant" || m !== WELCOME),
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        throw new Error(`Request failed (${res.status}): ${detail}`);
      }

      const data = await res.json();
      setDemoMode(Boolean(data.demo));
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">G</div>
        <div>
          <h1>Grok Bot</h1>
          <p className="subtitle">
            {demoMode ? "Demo mode — set XAI_API_KEY for live Grok replies" : "Powered by xAI Grok"}
          </p>
        </div>
      </header>

      <main className="chat" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            <span className="who">{m.role === "user" ? "You" : "Grok"}</span>
            <p>{m.content}</p>
          </div>
        ))}
        {loading && (
          <div className="bubble assistant">
            <span className="who">Grok</span>
            <p className="typing">
              <span></span>
              <span></span>
              <span></span>
            </p>
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </main>

      <form className="composer" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          placeholder="Send a message…"
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          aria-label="Message"
        />
        <button type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}
