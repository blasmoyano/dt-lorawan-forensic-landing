# dt-lorawan-forensic-landing

Landing page de presentación para el Trabajo Final de Grado (TFG):  
**"Gemelo Digital Como Plataforma Forense Para Análisis de Redes LoRaWAN"**  
- **Autor**: Blas Moyano  
- **Carrera**: Licenciatura en Seguridad Informática  
- **Institución**: Universidad Siglo 21  

Tecnología: [Astro](https://astro.build/) · Publicada automáticamente en GitHub Pages.

🌐 **Sitio Web**: https://blasmoyano.github.io/dt-lorawan-forensic-landing/

---

## Cómo levantar la web localmente

Astro requiere **Node.js** (versión 18.20+, 20.3+ o 22+).

### 1. Instalar Node.js en macOS (si aún no lo tenés)
- Descargá el instalador oficial `.pkg` para Mac desde: [nodejs.org](https://nodejs.org/) (se recomienda la versión **LTS**).
- O si usás Homebrew: `brew install node`.

### 2. Levantar el proyecto
Una vez que tengas `node` y `npm` en tu terminal, ejecutá en la raíz del proyecto:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo local
npm run dev
```

El servidor te indicará la URL local, que por la configuración de base será:  
👉 **http://localhost:4321/dt-lorawan-forensic-landing/**

Otros comandos útiles:
```bash
npm run build    # Compila el sitio estático para producción en /dist
npm run preview  # Previsualiza la build de producción localmente
```

---

## Configuración de Videos y Fotos de Nodos

Todo el contenido multimedia se administra centralizadamente desde [`src/data/media.ts`](src/data/media.ts):

### Múltiples Videos
Podés agregar todos los videos que necesites en el array `videos`:
```typescript
{
  title: 'Ataque de Replay y Detección',
  category: 'Escenario Experimental',
  description: 'Demostración de inyección con nodo Heltec...',
  id: 'YOUTUBE_ID', // Si es de YouTube
  // o: src: 'video/mi-video.mp4' // Si es archivo local en public/video/
}
```
*Si dejás `id` y `src` vacíos, se mostrará una terminal interactiva de previsualización con el título y descripción.*

### Fotos del Banco de Pruebas
1. Copiá tus fotos en la carpeta `public/images/nodos/`.
2. Asocialas en el array `nodes` de `src/data/media.ts`:
```typescript
{
  src: 'images/nodos/foto-heltec.jpg',
  title: 'Nodos Sensores (x2)',
  spec: 'Heltec WiFi LoRa 32 V4 + BME280',
  caption: '...'
}
```

---

## Deploy en GitHub Pages

El proyecto incluye un flujo de automatización completo mediante GitHub Actions en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. En tu repositorio de GitHub andá a: **Settings** ➔ **Pages**.
2. En **Build and deployment** seleccioná **Source: GitHub Actions**.
3. Cada vez que hagas `git push origin main`, GitHub compilará Astro y publicará el sitio automáticamente.
