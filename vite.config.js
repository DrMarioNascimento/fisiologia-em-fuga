import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", /* 15/10/2026: publicado na raiz de fisiologia-em-fuga.drmarionascimento.com.br */
  plugins: [react()],
  build: { rollupOptions: { input: {
    main: fileURLToPath(new URL("./index.html", import.meta.url)),
    percursos: fileURLToPath(new URL("./percursos/index.html", import.meta.url)),
  } } },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

