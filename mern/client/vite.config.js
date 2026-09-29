import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // <-- register the Tailwind plugin here
  ],
  server: {
    proxy: {
       // Redirect all /record requests to the dev server
      '/record': 'http://localhost:5050',
    },
  },
})