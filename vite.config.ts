import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@context': '/src/context',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@routes': '/src/routes',
      '@constants': '/src/constants',
      '@types': '/src/types',
      '@services': '/src/services',
      '@store': '/src/store',
      '@api': '/src/api',
      '@config': '/src/config',
      '@mocks': '/src/mocks',
      '@tests': '/src/tests',
      '@locales': '/src/locales',
      '@lib': '/src/lib',
      '@middleware': '/src/middleware',
      '@helpers': '/src/helpers',
      '@images': '/src/assets/images',
      '@fonts': '/src/assets/fonts',
      '@videos': '/src/assets/videos',
      '@audios': '/src/assets/audios',
      '@icons': '/src/assets/icons',
      '@svg': '/src/assets/svg',
    },
  },
});
