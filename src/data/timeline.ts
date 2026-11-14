export interface TimelineEntry {
  date: string
  title: string
  subtitle: string
  description?: string
  highlights?: string[]
  link?: string
}

export const EXPERIENCE: TimelineEntry[] = [
  {
    date: "Mayo 2025 - Actualidad",
    title: "Pasante de Investigación",
    subtitle: "Laboratorio de Robótica e Inteligencia Artificial, CAETI - UAI",
    description:
      "Investigación aplicada en robótica bípeda orientada a reducir la brecha entre simulación y realidad (sim-to-real gap), con modelos de estabilidad dinámica como ZMP y LIPM.",
    highlights: [
      "Diseño paramétrico en Fusion 360 de una plataforma modular de 6 grados de libertad.",
      "Fabricación y validación del tren inferior con impresión 3D (FDM) en PLA y ABS.",
      "Firmware no bloqueante sobre ESP32, controlando servomotores de alto torque con PCA9685 vía I2C.",
      "Diagnóstico de restricciones físicas y eléctricas: alimentación aislada y mitigación de holguras mecánicas.",
    ],
  },
]

export const EDUCATION: TimelineEntry[] = [
  {
    date: "2025 - Presente",
    title: "Ingeniería en Sistemas Informáticos",
    subtitle: "Universidad Abierta Interamericana (UAI)",
    description:
      "Cursando 2.º año. Formación en algoritmos, estructuras de datos, arquitectura de computadoras, análisis y diseño de sistemas, y arquitectura de software (N-Capas y patrones de diseño).",
  },
  {
    date: "Abril - Junio 2023",
    title: "Especialización en Django",
    subtitle: "Codo a Codo 4.0",
    description:
      "Modelos, vistas y plantillas, ORM y desarrollo de aplicaciones web robustas y seguras con Django.",
  },
  {
    date: "Junio - Noviembre 2022",
    title: "Especialización en React JS",
    subtitle: "Codo a Codo 4.0",
    description:
      "Componentes reutilizables, manejo de estado con hooks y Context, y construcción de interfaces interactivas.",
  },
  {
    date: "Junio - Noviembre 2021",
    title: "Python Full Stack",
    subtitle: "Codo a Codo 4.0",
    description:
      "Desarrollo web completo con Python en el backend y HTML, CSS y JavaScript en el frontend, con un primer acercamiento a Django.",
  },
]
