import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/insert-data': { // Match the API route
        target: 'http://localhost:2020', // Backend server URL
        changeOrigin: true, // Adjust the Origin header to match the target
        secure: false, // Disable SSL verification for development (optional)
      },
    },
  },
})
