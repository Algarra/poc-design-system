/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/button',
  plugins: [
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({
      insertTypesEntry: true,
      entryRoot: 'src',
      tsconfigPath: './tsconfig.lib.json',
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/libs/button',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'button',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
    },
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-import'), // Enables @import in CSS files
        require('autoprefixer'), // Adds vendor prefixes to CSS
        tailwindcss(), // Add TailwindCSS here
      ],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/button',
      provider: 'v8',
    },
  },
});
