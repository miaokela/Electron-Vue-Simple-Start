import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import UnoCSS from 'unocss/vite'

export default defineConfig({
  root: "src",
  base: "./",
  plugins: [vue(), tailwindcss(), UnoCSS()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/renderer"),
    emptyOutDir: true
  },
  server: { port: 3001 },
});
