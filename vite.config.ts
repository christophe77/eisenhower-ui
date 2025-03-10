import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.build.json',  // Utilise ton tsconfig de build
      exclude: ['node_modules', 'dist', 'stories'],  // Exclut les répertoires indésirables
    }),
  ],
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],  // Empêche le pré-bundling de ce plugin
  },
  build: {
    lib: {
      entry: './src/index.ts',  // Le point d'entrée de ta librairie
      name: 'eisenhower-ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // Exclut React et React DOM de ton bundle
    },
    sourcemap: true,
    emptyOutDir: false,  // Vide le répertoire de build avant chaque compilation
  },
});
