// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // This is used for canonical URLs + sitemap generation
  site: 'https://clawdbotsetup.nl',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
