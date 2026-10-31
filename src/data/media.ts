/**
 * Configuración de medios de la landing.
 * Editá este archivo para agregar los videos y las fotos de los nodos.
 */

export interface VideoItem {
  id?: string; // YouTube ID (ej. 'dQw4w9WgXcQ')
  src?: string; // Ruta relativa a public/ (ej. 'video/demo1.mp4')
  poster?: string; // Poster opcional
  title: string;
  category: string;
  description: string;
  highlights?: string[];
}

/**
 * Videos de demostración del banco de pruebas y casos forenses.
 * Podés agregar todos los videos que necesites.
 * Si id y src están vacíos, se mostrará un placeholder interactivo con el título y descripción.
 */
export const videos: VideoItem[] = [
  {
    src: 'video/captura.mp4',
    title: 'Video 1 — Captura pasiva de tráfico LoRaWAN y continuidad operativa',
    category: 'Módulo de Captura Pasiva',
    description: 'Demostración de la comunicación de dos nodos con ChirpStack, activación del capturador en socket UDP/1700, consulta de observaciones y metadatos, preservación del PCAP original y comprobación de continuidad operativa al detener el capturador (respaldado por los ensayos A/B/A).',
    highlights: ['Semtech UDP/1700', 'Continuidad A/B/A', 'Integridad SHA-256', 'Preservación PCAP'],
  },
  {
    src: 'video/replay.mp4',
    title: 'Video 2 — Ataque de Replay y Detección en Gemelo Digital',
    category: 'Escenario Experimental',
    description: 'Inyección de tramas repetidas mediante nodo atacante Heltec V4. Se demuestra la diferencia de visibilidad: ChirpStack descarta el replay mientras el capturador preserva las 9 ocurrencias y el gemelo digital señala el indicio.',
    highlights: ['Nodo Heltec Atacante', 'Replay PHYPayload', 'Regla CONTADOR-01', 'Preservación sin Deduplicar'],
  },
  {
    title: 'Video 3 — Reconstrucción de Caso y Paquete de Evidencia',
    category: 'Plataforma Forense',
    description: 'Línea de tiempo del incidente, verificación independiente de hashes y exportación del paquete forense verificable con firma digital Ed25519.',
    highlights: ['Línea de Tiempo', 'Firma Ed25519', 'Cadena de Custodia'],
  },
];

export interface NodePhoto {
  /** Ruta relativa a public/, ej: 'images/nodos/nodo-01.jpg'. Vacío = marcador de posición. */
  src: string;
  /** Nombre del dispositivo o componente */
  title: string;
  /** Rol y especificación técnica */
  spec: string;
  /** Descripción del dispositivo según el banco de pruebas del TFG */
  caption: string;
}

/** Fotos de los dispositivos del laboratorio (Heltec WiFi LoRa 32 V4, SenseCAP M2, Sensores). */
export const nodes: NodePhoto[] = [
  {
    src: 'images/nodos/nodo.jpeg',
    title: 'Nodos Sensores (x2)',
    spec: 'Heltec WiFi LoRa 32 V4 + BME280',
    caption: 'End-devices clase A encargados de telemetría ambiental (temperatura y humedad) para silobolsas y plantas de acopio.',
  },
  {
    src: 'images/nodos/gateway_sensecap.jpeg',
    title: 'Gateway LoRaWAN',
    spec: 'Seeed Studio SenseCAP M2',
    caption: 'Concentrador multicanal configurado en plan regional AU915-928 (resolución ENACOM 4653/2019).',
  },
  {
    src: 'images/nodos/nodo_atacante.jpeg',
    title: 'Nodo Atacante',
    spec: 'Heltec WiFi LoRa 32 V4',
    caption: 'Dispositivo dedicado a la generación controlada de ataques de repetición (replay de PHYPayload) y saturación del canal.',
  },
  {
    src: 'images/nodos/entorno_prueba.jpeg',
    title: 'Banco de Pruebas Integrado',
    spec: 'Host Ubuntu + ChirpStack + Capturador',
    caption: 'Entorno de laboratorio local con captura pasiva por socket UDP/1700, preservación en SQLite y gemelo digital.',
  },
];
