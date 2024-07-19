import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  redirects: [
    {
      source: '/logout',
      destination: '/index',
      status: 301 // Kalıcı yönlendirme
    }
  ],
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify()
});

