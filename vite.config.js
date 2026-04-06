import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      webp: { quality: 82, effort: 6 },
      jpg: { quality: 82, progressive: true },
      jpeg: { quality: 82, progressive: true },
      png: { quality: [0.8, 0.9], speed: 4 },
      svg: { plugins: [{ name: 'preset-default' }] },
    }),
  ],
})
