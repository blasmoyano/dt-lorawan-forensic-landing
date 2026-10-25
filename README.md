# dt-lorawan-forensic-landing

Landing page sobre el TFG: **K2SO — Gemelo digital forense para redes LoRaWAN**, hecha con [Astro](https://astro.build/) y publicada en GitHub Pages.

🌐 https://blasmoyano.github.io/dt-lorawan-forensic-landing/

## Desarrollo local

Requiere Node.js 18.20+ / 20.3+ / 22+.

```bash
npm install
npm run dev      # http://localhost:4321/dt-lorawan-forensic-landing/
npm run build    # genera dist/
npm run preview
```

## Video y fotos de los nodos

Todo se configura en [`src/data/media.ts`](src/data/media.ts):

- **Video**: YouTube (`{ type: 'youtube', id: '...' }`) o archivo local en `public/video/` (`{ type: 'file', src: 'video/demo.mp4' }`).
- **Nodos**: copiá las fotos en `public/images/nodos/` y completá `src` (ej. `images/nodos/nodo-01.jpg`), `title` y `caption`.

Mientras estén vacíos se muestran marcadores de posición.

## Deploy en GitHub Pages

1. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Hacé push a `main`. El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila y publica automáticamente.

Si cambiás el nombre del repo o usás dominio propio, ajustá `site` y `base` en [`astro.config.mjs`](astro.config.mjs).
