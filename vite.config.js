import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const isPackageBuild = mode === 'package'; // حالت پکیج

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
    },
    base: isPackageBuild ? '/' : '/ui-kit-test/', // برای GitHub Pages
    build: isPackageBuild
      ? {
          lib: {
            entry: path.resolve(__dirname, 'src/components/index.jsx'),
            name: 'UIKit',
            formats: ['es', 'cjs', 'umd'],
            fileName: (format) => `index.${format}.js`,
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
        }
      : {}, // در حالت وب‌سایت نیازی به تنظیمات lib نیست
  };
});
