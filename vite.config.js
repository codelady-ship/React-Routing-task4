import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://codelady-ship.github.io/React-Routing-task4/
// https://vite.dev/config/
export default defineConfig({
  base: '/React-Routing-task4/',
  plugins: [react()],
})
