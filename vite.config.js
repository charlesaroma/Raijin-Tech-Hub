import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  optimizeDeps: {
    include: ['react-icons/fa'],
  },
  
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
    
    // Chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'form-vendor': ['formik', 'yup'],
          'icons-vendor': ['react-icons'],
          'lottie-vendor': ['@lottiefiles/dotlottie-react', 'lottie-react'],
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Enable source maps for production debugging (optional, disable for smaller build)
    sourcemap: false,
    
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,
  },
  
  // Performance optimization
  server: {
    hmr: {
      overlay: true,
    },
  },
});
