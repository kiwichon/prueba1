# Portafolio · Rafael Arias

Landing de portafolio construida con **Astro**. Diseño **editorial minimalista**, **bilingüe (ES/EN)**, optimizada para **mobile y desktop**, con **animaciones sutiles al hacer scroll**. Pensada para desplegarse en **Vercel**.

---

## 🚀 Desarrollo

```bash
npm install      # instalar dependencias (una vez)
npm run dev      # servidor local → http://localhost:4321
npm run build    # build de producción → /dist
npm run preview  # previsualizar el build
```

---

## ✏️ Cómo editar el contenido (lo único que tocas normalmente)

Todo el texto, los proyectos, la experiencia, los enlaces y las imágenes se controlan desde **un solo archivo**:

```
src/data/content.ts
```

Cada texto es bilingüe:

```ts
title: { es: 'Mi título', en: 'My title' }
```

> Los campos marcados con `// TODO` son **referenciales (placeholder)**. Reemplázalos con la información real.

### Agregar / cambiar un proyecto

En `content.projects` agrega o edita un objeto. Es **modular**: agrega los que quieras.

```ts
{
  slug: 'mi-proyecto',
  title: { es: 'Mi Proyecto', en: 'My Project' },
  category: { es: 'Diseño de producto', en: 'Product design' },
  year: '2025',
  description: { es: '...', en: '...' },
  tags: ['UX', 'UI'],
  image: '/images/projects/mi-proyecto.jpg', // ver abajo
  alt: { es: 'Descripción', en: 'Description' },
  link: 'https://...', // opcional: caso de estudio externo
}
```

### Subir imágenes reales (reemplazar placeholders)

1. Coloca la imagen en `public/images/projects/`
   (formatos recomendados: `.jpg`, `.png` o `.webp`, ~1200×900 px).
2. Apunta el campo `image` del proyecto a esa ruta, p. ej. `/images/projects/mi-proyecto.jpg`.

Mientras no subas imágenes, se muestran SVG referenciales ya incluidos.

---

## 🧩 Estructura

```
src/
  data/content.ts        ← FUENTE DE VERDAD (edita aquí)
  layouts/Base.astro     ← <head>, fuentes, scripts de idioma y scroll
  components/
    Nav.astro            ← navegación + selector ES/EN
    Hero.astro
    Work.astro / ProjectCard.astro
    About.astro
    Experience.astro
    Contact.astro
    Footer.astro
    T.astro              ← helper de texto bilingüe
  styles/global.css      ← sistema de diseño (colores, tipografía, animaciones)
public/
  images/                ← imágenes (placeholders SVG por ahora)
  favicon.svg
```

---

## 🎨 Sistema de diseño

Los colores y la tipografía viven como variables CSS en `src/styles/global.css` (`:root`).
Cambia ahí la paleta o las fuentes y se actualiza todo el sitio.

- Tipografías: **Fraunces** (serif display) + **Inter** (sans).
- Acento: terracota `--accent`.
- Animaciones: clase `.reveal` + `IntersectionObserver` (respeta `prefers-reduced-motion`).

---

## ☁️ Deploy en Vercel

1. Sube el repo a GitHub.
2. En Vercel: *New Project* → importa el repo.
3. Vercel detecta Astro automáticamente (build `astro build`, output `dist`). Deploy.
