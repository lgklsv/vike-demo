import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import vikeNode from 'vike-node/plugin';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    server: {
      host: true,
    },
    plugins: [vike(), vikeNode('server/index.js'), react(), tailwindcss()],
    build: {
      target: 'es2022',
    },
    base: '/app',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
