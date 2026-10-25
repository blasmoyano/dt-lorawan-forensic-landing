// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://blasmoyano.github.io/dt-lorawan-forensic-landing/
// Si usás un dominio propio, cambiá `site` y poné `base: '/'`.
export default defineConfig({
  site: 'https://blasmoyano.github.io',
  base: '/dt-lorawan-forensic-landing',
  trailingSlash: 'ignore',
});
