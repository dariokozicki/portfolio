import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kozicki.dev',
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: { format: 'directory' },
  compressHTML: true,
});
