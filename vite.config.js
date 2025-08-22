import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// GitHub Pages "project" repo için base:
const repo = 'artery-landing' // repo adın
export default defineConfig({
  plugins: [react(), tailwind()],
  base: `/${repo}/`,
})
