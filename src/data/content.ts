/**
 * =====================================================================
 *  FUENTE DE VERDAD DEL PORTAFOLIO  ·  PORTFOLIO SINGLE SOURCE OF TRUTH
 * =====================================================================
 *
 *  Edita SOLO este archivo para actualizar textos, proyectos, imágenes
 *  y enlaces. Todo el sitio se construye a partir de aquí.
 *
 *  Edit ONLY this file to update copy, projects, images and links.
 *  The whole site is generated from this data.
 *
 *  Cada campo de texto es bilingüe:  { es: "...", en: "..." }
 *  Each text field is bilingual:     { es: "...", en: "..." }
 *
 *  ⚠️  El contenido marcado con  // TODO  es REFERENCIAL (placeholder).
 *      Reemplázalo con la información real de Rafael.
 * =====================================================================
 */

export type Bilingual = { es: string; en: string };

export interface Project {
  /** identificador único para el ancla / unique slug */
  slug: string;
  title: Bilingual;
  /** rol o categoría corta — short role / category */
  category: Bilingual;
  year: string;
  description: Bilingual;
  /** etiquetas cortas — short tags */
  tags: string[];
  /** ruta de imagen en /public/images — image path under /public/images */
  image: string;
  /** texto alternativo de la imagen — image alt text */
  alt: Bilingual;
  /** enlace externo opcional (caso de estudio, behance, etc.) */
  link?: string;
}

export interface ExperienceItem {
  role: Bilingual;
  company: string;
  period: string;
  description: Bilingual;
}

export const content = {
  /** Metadatos / SEO */
  meta: {
    // TODO: confirmar nombre completo / confirm full name
    name: 'Rafael Arias',
    title: {
      es: 'Rafael Arias — Product & UX Designer',
      en: 'Rafael Arias — Product & UX Designer',
    } as Bilingual,
    description: {
      es: 'Portafolio de Rafael Arias, diseñador de producto y experiencia (UX/UI). Hecho en Perú.',
      en: 'Portfolio of Rafael Arias, product & UX/UI designer. Made in Perú.',
    } as Bilingual,
    url: 'https://www.rafaelarias.com',
  },

  /** Navegación / Nav links (anclas internas) */
  nav: [
    { id: 'work', label: { es: 'Trabajo', en: 'Work' } as Bilingual },
    { id: 'about', label: { es: 'Sobre mí', en: 'About' } as Bilingual },
    { id: 'experience', label: { es: 'Experiencia', en: 'Experience' } as Bilingual },
    { id: 'contact', label: { es: 'Contacto', en: 'Contact' } as Bilingual },
  ],

  /** HERO */
  hero: {
    // TODO: reemplazar con tu eslogan real / replace with your real tagline
    eyebrow: {
      es: 'Product & UX Designer · Hecho en Perú',
      en: 'Product & UX Designer · Made in Perú',
    } as Bilingual,
    headline: {
      es: 'Diseño productos digitales claros, humanos y memorables.',
      en: 'I design digital products that are clear, human and memorable.',
    } as Bilingual,
    sub: {
      es: 'Diseñador de producto enfocado en convertir problemas complejos en experiencias simples. Actualmente entre Barcelona y Lima.',
      en: 'Product designer focused on turning complex problems into simple experiences. Currently between Barcelona and Lima.',
    } as Bilingual,
    ctaPrimary: { es: 'Ver trabajo', en: 'View work' } as Bilingual,
    ctaSecondary: { es: 'Contáctame', en: 'Get in touch' } as Bilingual,
  },

  /** ABOUT */
  about: {
    label: { es: 'Sobre mí', en: 'About' } as Bilingual,
    // TODO: pega aquí tu bio real de LinkedIn / paste your real LinkedIn bio
    paragraphs: [
      {
        es: 'Soy Rafael, diseñador de producto y experiencia con varios años transformando ideas en interfaces que la gente disfruta usar. Trabajo en la intersección entre la investigación, el diseño visual y el negocio.',
        en: 'I’m Rafael, a product & UX designer with several years turning ideas into interfaces people enjoy using. I work at the intersection of research, visual design and business.',
      } as Bilingual,
      {
        es: 'Me obsesiona el detalle: la tipografía justa, el micro-momento que hace clic, el flujo que desaparece de lo evidente. Creo en el diseño como una herramienta para resolver, no solo para decorar.',
        en: 'I’m obsessed with detail: the right typography, the micro-moment that clicks, the flow that becomes invisible. I believe design is a tool to solve, not only to decorate.',
      } as Bilingual,
    ],
    /** skills cortas — short skills */
    skills: [
      'UX/UI Design',
      'Product Design',
      'Design Systems',
      'Prototyping',
      'User Research',
      'Branding',
      'Figma',
      'Webflow',
    ],
  },

  /** WORK / PROJECTS — modular: agrega o quita objetos libremente */
  projects: [
    {
      slug: 'proyecto-uno',
      title: { es: 'Proyecto Uno', en: 'Project One' },
      category: { es: 'Diseño de producto', en: 'Product design' },
      year: '2025',
      description: {
        es: 'Rediseño de la experiencia de una app fintech: del onboarding al dashboard. Enfoque en claridad y confianza.',
        en: 'Experience redesign for a fintech app: from onboarding to dashboard. Focused on clarity and trust.',
      },
      tags: ['UX', 'UI', 'Fintech'],
      image: '/images/projects/project-01.svg', // TODO: reemplazar imagen real
      alt: { es: 'Vista previa del Proyecto Uno', en: 'Project One preview' },
      // link: 'https://...',
    },
    {
      slug: 'proyecto-dos',
      title: { es: 'Proyecto Dos', en: 'Project Two' },
      category: { es: 'Sistema de diseño', en: 'Design system' },
      year: '2024',
      description: {
        es: 'Construcción de un sistema de diseño escalable que unificó tres productos bajo una misma identidad.',
        en: 'Built a scalable design system that unified three products under one identity.',
      },
      tags: ['Design System', 'Tokens', 'Figma'],
      image: '/images/projects/project-02.svg',
      alt: { es: 'Vista previa del Proyecto Dos', en: 'Project Two preview' },
    },
    {
      slug: 'proyecto-tres',
      title: { es: 'Proyecto Tres', en: 'Project Three' },
      category: { es: 'Branding & Web', en: 'Branding & Web' },
      year: '2024',
      description: {
        es: 'Identidad visual y sitio web para una marca emergente, desde el concepto hasta el desarrollo.',
        en: 'Visual identity and website for an emerging brand, from concept to development.',
      },
      tags: ['Branding', 'Web', 'Art Direction'],
      image: '/images/projects/project-03.svg',
      alt: { es: 'Vista previa del Proyecto Tres', en: 'Project Three preview' },
    },
    {
      slug: 'proyecto-cuatro',
      title: { es: 'Proyecto Cuatro', en: 'Project Four' },
      category: { es: 'Mobile', en: 'Mobile' },
      year: '2023',
      description: {
        es: 'App móvil de bienestar centrada en hábitos. Diseño emocional y motivación a largo plazo.',
        en: 'Wellness mobile app centered on habits. Emotional design and long-term motivation.',
      },
      tags: ['Mobile', 'UX', 'Product'],
      image: '/images/projects/project-04.svg',
      alt: { es: 'Vista previa del Proyecto Cuatro', en: 'Project Four preview' },
    },
  ] as Project[],

  /** EXPERIENCE — modular */
  experience: [
    {
      // TODO: reemplazar con experiencia real de LinkedIn
      role: { es: 'Senior Product Designer', en: 'Senior Product Designer' },
      company: 'Empresa / Company',
      period: '2023 — Presente',
      description: {
        es: 'Lidero el diseño de producto de extremo a extremo, desde la investigación hasta la entrega.',
        en: 'Leading end-to-end product design, from research to delivery.',
      },
    },
    {
      role: { es: 'Product Designer', en: 'Product Designer' },
      company: 'Empresa / Company',
      period: '2020 — 2023',
      description: {
        es: 'Diseño de interfaces y flujos para productos digitales con foco en crecimiento.',
        en: 'Interface and flow design for digital products with a growth focus.',
      },
    },
    {
      role: { es: 'UI Designer', en: 'UI Designer' },
      company: 'Empresa / Company',
      period: '2018 — 2020',
      description: {
        es: 'Diseño visual y prototipado para clientes de distintas industrias.',
        en: 'Visual design and prototyping for clients across industries.',
      },
    },
  ] as ExperienceItem[],

  /** CONTACT */
  contact: {
    label: { es: 'Contacto', en: 'Contact' } as Bilingual,
    headline: {
      es: '¿Tienes un proyecto en mente?',
      en: 'Got a project in mind?',
    } as Bilingual,
    sub: {
      es: 'Estoy disponible para nuevos proyectos y colaboraciones. Conversemos.',
      en: 'I’m available for new projects and collaborations. Let’s talk.',
    } as Bilingual,
    // TODO: confirmar email real / confirm real email
    email: 'rafoarias@gmail.com',
    cta: { es: 'Escríbeme', en: 'Email me' } as Bilingual,
  },

  /** SOCIAL / FOOTER LINKS */
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rafoarias/' },
    { label: 'Behance', url: 'https://www.behance.net/rafaelarias' },
    { label: 'Web', url: 'https://www.rafaelarias.com' },
    // TODO: agregar Dribbble / Instagram / X si aplica
  ],
};

export type SiteContent = typeof content;
