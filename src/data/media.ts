/**
 * Configuración de medios de la landing.
 * Editá este archivo para agregar el video y las fotos de los nodos.
 */

export type VideoConfig =
  | { type: 'youtube'; id: string; title?: string }
  | { type: 'file'; src: string; poster?: string; title?: string }
  | { type: 'none' };

/**
 * Video de demostración.
 * - YouTube: { type: 'youtube', id: 'dQw4w9WgXcQ' }
 * - Archivo local (en public/video/): { type: 'file', src: 'video/demo.mp4', poster: 'images/poster.jpg' }
 * - Sin video todavía: { type: 'none' }  → se muestra un marcador de posición.
 */
export const video: VideoConfig = { type: 'none' };

export interface NodePhoto {
  /** Ruta relativa a public/, ej: 'images/nodos/nodo-01.jpg'. Vacío = marcador de posición. */
  src: string;
  /** Nombre del nodo / dispositivo */
  title: string;
  /** Descripción breve (hardware, ubicación, rol) */
  caption: string;
}

/** Fotos de los nodos LoRaWAN. Copiá las imágenes en public/images/nodos/. */
export const nodes: NodePhoto[] = [
  { src: '', title: 'Nodo 01', caption: 'End-device LoRaWAN · sensor de campo' },
  { src: '', title: 'Nodo 02', caption: 'End-device LoRaWAN · clase A' },
  { src: '', title: 'Gateway', caption: 'Concentrador / packet forwarder' },
  { src: '', title: 'Banco de pruebas', caption: 'Montaje del laboratorio' },
];
