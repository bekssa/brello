import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
      reactRouter(),
      tsconfigPaths(),
      tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
