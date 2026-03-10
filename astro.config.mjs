import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wild-flower.co',
  integrations: [tailwind()],
  output: 'static',
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
