import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // To generate type declarations

export default defineConfig({
  build: {
    lib: {
      entry: '/src/index.ts', // Adjust this if needed
      name: 'Button',
      fileName: (format) => `button.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
  },
  plugins: [dts()],
});
