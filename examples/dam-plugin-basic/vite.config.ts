import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import damPlugin from '@tezignlab/vite-plugin-dam-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), damPlugin()],
    define: {
      'process.env': {
        NODE_ENV: command === 'build' ? 'production' : 'development',
      },
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: '[name].[hash].js',
        },
      },
      lib: {
        entry: {
          entry_plugin: 'src/entry_plugin.ts',
          menu_plugin: 'src/menu_plugin.ts',
          component_plugin: 'src/component_plugin.ts',
        },
        formats: ['es'],
      },
    },
  };
});
