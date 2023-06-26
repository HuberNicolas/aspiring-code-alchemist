import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ["prismjs", {
    "languages": ["java", "latex", "php", "python", "sql", "javascript"],
    "plugins": ["line-numbers"],
    "theme": "twilight",
    "css": true
  }]],
  base: '/aspiring-code-alchemist/',
})
