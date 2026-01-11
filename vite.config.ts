import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
