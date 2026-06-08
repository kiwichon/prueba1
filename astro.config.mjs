import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://www.rafaelarias.com',
  // Static output works out of the box on Vercel — no adapter required.
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
