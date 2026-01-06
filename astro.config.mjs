// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual production domain
  site: 'https://youtubvanced.org/',
  integrations: [
    svelte(),
    sitemap({
      // Customize priorities for important pages
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://youtubvanced.org/') {
          item.priority = 1.0;
        }
        // FAQ and Help pages are important
        else if (item.url.includes('/faq') || item.url.includes('/help')) {
          item.priority = 0.8;
        }
        // Default priority for other pages
        else {
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});