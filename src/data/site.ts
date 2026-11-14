export const SITE = {
  name: "Nahuel Cerrano",
  title: "Nahuel Cerrano | Estudiante de Ingeniería en Sistemas y Desarrollador de Software",
  description:
    "Portfolio de Nahuel Cerrano: estudiante de Ingeniería en Sistemas Informáticos (UAI), desarrollador full stack y pasante de investigación en robótica bípeda en CAETI.",
  location: "CABA, Argentina",
  email: "nahuelcerrano21@gmail.com",
  linkedin: "https://www.linkedin.com/in/nahuel-cerrano",
  github: "https://github.com/nahuelcerrano",
} as const

export interface NavItem {
  title: string
  url: string
  /** id de la sección que resalta este link al hacer scroll */
  section?: string
  hideOnMobile?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { title: "Experiencia", section: "experiencia", url: "/#experiencia" },
  { title: "Proyectos", section: "proyectos", url: "/#proyectos" },
  { title: "Habilidades", section: "habilidades", url: "/#habilidades", hideOnMobile: true },
  { title: "Estudios", section: "estudios", url: "/#estudios" },
  { title: "Sobre mí", section: "sobre-mi", url: "/#sobre-mi" },
  { title: "Contacto", url: `mailto:${SITE.email}` },
]
