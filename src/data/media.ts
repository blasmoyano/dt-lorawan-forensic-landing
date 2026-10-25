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
}

/**
 * Videos de demostración del banco de pruebas y casos forenses.
 * Podés agregar todos los videos que necesites.
 * Si id y src están vacíos, se mostrará un placeholder interactivo con el título y descripción.
 */
export const videos: VideoItem[] = [
  {
    title: 'Adquisición Pasiva y Captura en Vivo',
    category: 'Módulo de Captura',
    description: 'Demostración de interceptación no intrusiva UDP/1700 antes del ChirpStack Gateway Bridge sin afectar la red operativa.',
  },
  {
    title: 'Ataque de Replay y Detección en Gemelo Digital',
    category: 'Escenario de Incidente',
    description: 'Inyección de tramas repetidas mediante nodo atacante Heltec V4, detección de anomalías de contador y preservación forense.',
  },
  {
    title: 'Reconstrucción de Caso y Paquete de Evidencia',
    category: 'Plataforma Forense',
    description: 'Línea de tiempo del incidente, verificación de hashes SHA-256 y exportación del paquete forense verificable.',
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
    src: '',
    title: 'Nodos Sensores (x2)',
    spec: 'Heltec WiFi LoRa 32 V4 + BME280',
    caption: 'End-devices clase A encargados de telemetría ambiental (temperatura y humedad) para silobolsas y plantas de acopio.',
  },
  {
    src: '',
    title: 'Gateway LoRaWAN',
    spec: 'Seeed Studio SenseCAP M2',
    caption: 'Concentrador multicanal configurado en plan regional AU915-928 (resolución ENACOM 4653/2019).',
  },
  {
    src: '',
    title: 'Nodo Atacante',
    spec: 'Heltec WiFi LoRa 32 V4',
    caption: 'Dispositivo dedicado a la generación controlada de ataques de repetición (replay de PHYPayload) y saturación del canal.',
  },
  {
    src: '',
    title: 'Banco de Pruebas Integrado',
    spec: 'Host Ubuntu + ChirpStack + Capturador',
    caption: 'Entorno de laboratorio local con captura pasiva por socket UDP/1700, preservación en SQLite y gemelo digital.',
  },
];
