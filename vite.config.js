import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// O workflow passa o caminho real do Pages; localmente a raiz é '/'.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const rawBase = process.env.VITE_BASE_PATH || env.VITE_BASE_PATH || "/";
  const base = `/${rawBase.replace(/^\/+|\/+$/g, "")}/`.replace("//", "/");
  return { plugins: [react()], base };
});
