# Portfolio Personal - CTO y Desarrollador Creativo

Portfolio web moderno y elegante construido con Next.js y Tailwind CSS.

## Tecnologías

- **Frontend**: Next.js, React, TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Emails**: Resend

## Características

- Diseño moderno, minimalista e impactante
- Animaciones fluidas al hacer scroll
- Responsive (mobile-first)
- Navegación intuitiva
- Secciones principales:
  - Hero con animación de partículas
  - Sobre mí (filosofía y experiencia)
  - Proyectos destacados
  - Timeline de proyectos
  - Contacto con formulario funcional

## Estructura del Proyecto

```
/src
  /app
    /contacto
    /proyectos
    globals.css
    layout.tsx
    page.tsx
  /components
    AboutSection.tsx
    ContactCTA.tsx
    Expertise.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    ProjectGrid.tsx
    ProjectsShowcase.tsx
    ProjectTimeline.tsx
```

## Instalación

1. Clona el repositorio:
```bash
git clone <url-repositorio>
```

2. Instala las dependencias:
```bash
cd portfolio
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización

Para personalizar el portfolio:

1. Actualiza la información personal en los componentes
2. Ajusta el tema de colores en `tailwind.config.js`
3. Agrega tus propias imágenes en la carpeta `/public/images`
4. Modifica los proyectos en los componentes `ProjectsShowcase`, `ProjectTimeline` y `ProjectGrid`

## Despliegue

Para construir la versión de producción:

```bash
npm run build
```

La aplicación está optimizada para ser desplegada en plataformas como Vercel, Netlify o cualquier otro servicio que soporte Next.js.

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.