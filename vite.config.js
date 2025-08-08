import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',

  build: {
    outDir: 'dist', // <- default, but make sure it's not changed
  }
})
// vite.config.js
