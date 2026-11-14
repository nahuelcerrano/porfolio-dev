
# 👨‍💻 Portfolio - Nahuel Cerrano

> **Estudiante de Ingeniería en Sistemas | Desarrollador de Software**

Este repositorio contiene el código fuente de mi portafolio personal, diseñado para mostrar mis proyectos, habilidades y trayectoria académica. El sitio está construido con un enfoque en el **rendimiento**, la **accesibilidad** y las **buenas prácticas de desarrollo**.

🔗 **Demo en vivo:** [porfolio-nahuel.vercel.app](https://porfolio-nahuel.vercel.app/)

---

## 🚀 Tecnologías Utilizadas

Sitio 100% estático generado con Astro: sin JavaScript de framework en el cliente, solo un pequeño script para resaltar la sección activa del menú.

* **Core:** [Astro](https://astro.build/) (v4) - Framework web para contenido.
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v3) - Para un diseño moderno y responsive.
* **Lenguaje:** TypeScript.
* **Deploy:** Vercel.

---

## 🛠️ Instalación y Uso Local

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/nahuelcerrano/porfolio-dev.git
cd porfolio-dev

```

### 2. Instalar dependencias

Este proyecto utiliza `bun`.

```bash
bun install

```

### 3. Ejecutar el servidor de desarrollo

Inicia el servidor local en `http://localhost:4321`.

```bash
bun run dev

```

### 4. Construir para producción (Build)

Para generar la versión estática optimizada en la carpeta `dist/`:

```bash
bun run build

```

---

## 📂 Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos (favicon)
├── src/
│   ├── assets/          # Imágenes optimizadas por Astro
│   ├── components/
│   │   ├── ui/          # Piezas chicas y genéricas (Badge, Tag, LinkButton, Timeline...)
│   │   └── blocks/      # Secciones de la página (Header, Hero, Projects, Skills...)
│   ├── data/            # Contenido del sitio: datos personales, experiencia, estudios, skills y proyectos
│   ├── icons/           # Íconos SVG como componentes
│   ├── layouts/         # Plantilla base (Layout.astro)
│   ├── pages/           # Rutas del sitio (index.astro)
│   └── styles/          # CSS global
└── astro.config.mjs     # Configuración del framework
```

Para actualizar el contenido (un proyecto nuevo, una skill, un cambio de experiencia) alcanza con editar los archivos de `src/data/`.

---

## ✨ Características Clave

* **Performance First:** HTML estático e imágenes optimizadas en build.
* **Responsive Design:** Adaptado a móviles, tablets y escritorio.
* **SEO Optimized:** Etiquetas meta y estructura semántica correcta.
* **Carga Diferida:** Optimización de imágenes y scripts para no bloquear el renderizado.

---

## 📬 Contacto

Si tienes alguna sugerencia o quieres contactarme por oportunidades laborales:

* **LinkedIn:** [linkedin.com/in/nahuel-cerrano](https://www.linkedin.com/in/nahuel-cerrano)
* **Email:** nahuelcerrano21@gmail.com
