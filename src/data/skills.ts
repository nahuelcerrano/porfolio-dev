export interface SkillGroup {
  title: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    title: "Lenguajes",
    items: ["C", "Python", "JavaScript", "TypeScript", "C#", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Vue", "Astro", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend y bases de datos",
    items: ["Django", ".NET 10 / ASP.NET Core", "API REST", "MySQL"],
  },
  {
    title: "Robótica y hardware",
    items: ["ESP32", "Firmware", "I2C", "PWM", "Fusion 360", "Impresión 3D (FDM)"],
  },
  {
    title: "Sistemas y herramientas",
    items: ["Linux (Manjaro/Arch)", "Bash", "Git", "GitHub", "VS Code", "Visual Studio"],
  },
  {
    title: "Soporte técnico",
    items: ["Armado de PCs", "Windows 10/11", "BIOS/UEFI", "Redes domésticas"],
  },
]
