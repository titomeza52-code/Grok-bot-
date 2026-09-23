import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    // Edge Functions are not used in this project. The local emulator requires a
    // Deno runtime that is not provisioned here, so disable it to avoid a crash.
    netlify({ edgeFunctions: { enabled: false } }),
  ],
  server: {
    host: true,
  },
});
