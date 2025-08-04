import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src",
  base: "./",
  plugins: [vue(), tailwindcss()],
  css: {
    postcss: '../postcss.config.cjs'  // 相对于 src 的路径
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/renderer"),
    emptyOutDir: true
  },
  server: { port: 3001 },
});
