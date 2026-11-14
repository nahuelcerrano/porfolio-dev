import type { ImageMetadata } from "astro"

import viajecitosImg from "@/assets/projects/viajecitos_project.jpg"
import ferreteriaImg from "@/assets/projects/ferreteria_maxi_project.jpg"
import pokemonImg from "@/assets/projects/pokemon_app_project.jpg"
import buscadorPeliculasImg from "@/assets/projects/buscador-peliculas.jpg"
import heroesImg from "@/assets/projects/heroes_spa_project.jpg"
import robotImg from "@/assets/projects/robot_bipedo.jpg"
import qrImg from "@/assets/projects/qr_generator.png"

export type TagKey =
  | "c"
  | "csharp"
  | "dotnet"
  | "aspnet"
  | "react"
  | "tailwind"
  | "vue"
  | "css"
  | "bootstrap"
  | "django"
  | "mysql"
  | "esp32"
  | "fusion360"
  | "print3d"

export interface Project {
  title: string
  description: string
  image: ImageMetadata
  /** Texto alternativo de la imagen; por defecto "Captura del proyecto {title}" */
  imageAlt?: string
  /** Clases de encuadre de la imagen; por defecto se muestra desde arriba a alto completo */
  imageClass?: string
  /** Crédito cuando la imagen no es propia */
  imageCredit?: string
  tags: TagKey[]
  link?: string
  github?: string
}

export const PROJECTS: Project[] = [
  {
    title: "Robot Bípedo",
    description:
      "Prototipo bípedo de 6 grados de libertad desarrollado en mi pasantía en CAETI - UAI. Diseño paramétrico en Fusion 360, piezas impresas en 3D y firmware no bloqueante en ESP32 que controla los servos con un PCA9685 por I2C, para estudiar la locomoción y la brecha sim-to-real.",
    image: robotImg,
    imageAlt: "Tren inferior del robot bípedo en fase de pruebas, conectado a un ESP32 en el laboratorio",
    imageClass: "object-[50%_75%] aspect-square",
    tags: ["esp32", "fusion360", "print3d"],
  },
  {
    title: "Generador de Códigos QR en C",
    description:
      "Herramienta programada desde cero en C que genera códigos QR funcionales: algoritmos de codificación, manipulación de matrices y gestión manual de memoria.",
    image: qrImg,
    tags: ["c"],
  },
  {
    title: "Viajecitos",
    description:
      "E-commerce de viajes y turismo: reservas de viajes, alojamiento en hoteles y paquetes turísticos. Frontend en React con Context API y React Router. La rama main ya incluye parte del backend, una API REST en C# con ASP.NET Core sobre .NET 10; la demo publicada corresponde a la rama demo, solo con el frontend.",
    link: "https://viajecitos-react.vercel.app/home",
    github: "https://github.com/nahuelcerrano/viajecitos-react",
    image: viajecitosImg,
    tags: ["react", "tailwind", "csharp", "dotnet", "aspnet"],
  },
  {
    title: "Ferretera Maxi",
    description:
      "Plataforma de gestión e inventario para una ferretería mayorista, donde se administran los pedidos de los preventistas. Productos renderizados desde MySQL con el ORM de Django. Proyecto académico en equipo.",
    github: "https://github.com/nahuelcerrano/grupo2-django",
    image: ferreteriaImg,
    tags: ["django", "mysql", "bootstrap"],
  },
  {
    title: "Pokemon App",
    description: "Juego hecho con Vue en el que hay que adivinar qué Pokémon es a partir de su silueta.",
    link: "https://vue-pokemon-app-api.netlify.app/",
    image: pokemonImg,
    tags: ["vue", "css"],
  },
  {
    title: "Buscador de películas",
    description: "Aplicación que consulta una API de películas a partir de la búsqueda ingresada por el usuario.",
    link: "https://buscador-de-pelis.vercel.app/",
    github: "https://github.com/nahuelcerrano/buscador-peliculas",
    image: buscadorPeliculasImg,
    tags: ["react", "css"],
  },
  {
    title: "Heroes SPA",
    description:
      "Sitio que muestra los héroes de Marvel y DC. Lo hice como ejercicio para aprender React Router.",
    link: "https://heroes-spa-project.vercel.app/marvel",
    github: "https://github.com/nahuelcerrano/heroes-spa",
    image: heroesImg,
    tags: ["react", "bootstrap"],
  },
]
