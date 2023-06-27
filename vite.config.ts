import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configDefaults } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      include: ['src/components/*', 'src/store/*'],
      exclude: [
        ...configDefaults.coverage.exclude,
        // This is likely to contain bootstrapping code, which is harder and less-valuable to test
        'src/main.ts',

        'src/App.vue',
        'src/styles/*',
        // Icons are basic SVGs and don't need testing
        'src/icons/*',
        // Screens are made up of tested base components
        'src/screens/*',
      ],
      provider: 'v8',
      // FIXME: The text appears twice in the console output, but zero times if I remove "text"
      reporter: ['cobertura', 'lcov', 'text'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: 'vitest.setup.ts',
  },
}));
