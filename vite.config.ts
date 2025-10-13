import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and React-related libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // Split Material-UI into its own chunk
          'mui-vendor': ['@mui/material', '@mui/system', '@emotion/react', '@emotion/styled'],
          
          // Split Framer Motion (animation library)
          'framer-vendor': ['framer-motion'],
          
          // Split Lucide icons
          'icons-vendor': ['lucide-react'],
        },
      },
    },
    // Increase chunk size warning limit to 1000 kB
    chunkSizeWarningLimit: 1000,
  },
})
