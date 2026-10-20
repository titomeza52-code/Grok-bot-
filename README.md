# Grok Bot

A minimal Grok-powered chatbot web app: a Vite + React single-page frontend backed by a
Netlify Function that talks to the [xAI Grok API](https://x.ai). It runs on Netlify and works
out of the box in a local **demo mode** when no API key is configured.

## Stack

- **Frontend:** Vite + React (`src/`)
- **Backend:** Netlify Function at `/api/chat` (`netlify/functions/chat.mts`)
- **Local dev:** [`@netlify/vite-plugin`](https://www.npmjs.com/package/@netlify/vite-plugin) so
  `npm run dev` serves the app and the function together — no `netlify dev` wrapper needed.

## Getting started

```bash
npm ci        # install dependencies
npm run dev   # start the dev server (frontend + functions)
```

Then open the printed local URL (defaults to http://localhost:5173).

## Configuration

The chat function reads its configuration from environment variables:

| Variable      | Required | Description                                              |
| ------------- | -------- | -------------------------------------------------------- |
| `XAI_API_KEY` | No       | xAI API key. When unset, the app runs in **demo mode**.  |
| `XAI_MODEL`   | No       | Grok model to use. Defaults to `grok-3-mini`.            |

For local development, copy `.env.example` to `.env` and fill in `XAI_API_KEY`. In production,
set these as Netlify environment variables. Never commit real keys.

## Build

```bash
npm run build   # outputs static site to dist/
```

## API

`POST /api/chat`

```json
{ "messages": [{ "role": "user", "content": "Hello!" }] }
```

Response:

```json
{ "reply": "Hi there!", "demo": false }
```
