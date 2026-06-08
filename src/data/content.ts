/**
 * =====================================================================
 *  FUENTE DE VERDAD DEL PORTAFOLIO  ·  PORTFOLIO SINGLE SOURCE OF TRUTH
 * =====================================================================
 *
 *  Edita SOLO este archivo para actualizar textos, proyectos, imágenes
 *  y enlaces. Todo el sitio se construye a partir de aquí.
 *
 *  Cada campo de texto es bilingüe:  { es: "...", en: "..." }
 *  Registro del español: latino peruano, profesional (no coloquial).
 *
 *  ⚠️  Lo marcado con  // TODO  está pendiente de confirmar.
 * =====================================================================
 */

export type Bilingual = { es: string; en: string };

export interface Project {
  slug: string;
  title: Bilingual;
  category: Bilingual;
  year: string;
  description: Bilingual;
  tags: string[];
  image: string;
  alt: Bilingual;
  link?: string;
}

export interface ExperienceItem {
  role: Bilingual;
  company: string;
  period: Bilingual;
  description?: Bilingual;
}

export interface Highlight {
  value: string;
  label: Bilingual;
}

export const content = {
  /** Metadatos / SEO */
  meta: {
    name: 'Rafael Arias',
    title: {
      es: 'Rafael Arias — Creative Director & AI Producer',
      en: 'Rafael Arias — Creative Director & AI Producer',
    } as Bilingual,
    description: {
      es: 'Rafael Arias. Más de 15 años de craft publicitario, hoy en la intersección entre creatividad y producción con IA generativa. Production Creative Director en Digitas (Publicis Groupe). Hecho en Perú.',
      en: 'Rafael Arias. 15+ years of advertising craft, now at the intersection of creativity and generative AI production. Production Creative Director at Digitas (Publicis Groupe). Made in Perú.',
    } as Bilingual,
    url: 'https://www.rafaelarias.com',
  },

  /** Navegación */
  nav: [
    { id: 'work', label: { es: 'Trabajo', en: 'Work' } as Bilingual },
    { id: 'about', label: { es: 'Sobre mí', en: 'About' } as Bilingual },
    { id: 'experience', label: { es: 'Experiencia', en: 'Experience' } as Bilingual },
    { id: 'contact', label: { es: 'Contacto', en: 'Contact' } as Bilingual },
  ],

  /** HERO */
  hero: {
    eyebrow: {
      es: 'Production Creative Director · Digitas — Publicis Groupe',
      en: 'Production Creative Director · Digitas — Publicis Groupe',
    } as Bilingual,
    headline: {
      es: 'Copywriter. Creative Director. AI Producer.',
      en: 'Copywriter. Creative Director. AI Producer.',
    } as Bilingual,
    sub: {
      es: 'Más de 15 años escribiendo campañas para marcas que probablemente reconoces. Hoy, en la intersección entre el craft publicitario y la producción con IA generativa.',
      en: 'Over 15 years writing campaigns for brands you probably know. Today, at the intersection of advertising craft and generative AI production.',
    } as Bilingual,
    ctaPrimary: { es: 'Ver trabajo', en: 'View work' } as Bilingual,
    ctaSecondary: { es: 'Conversemos', en: 'Let’s talk' } as Bilingual,
  },

  /** ABOUT */
  about: {
    label: { es: 'Sobre mí', en: 'About' } as Bilingual,
    lead: {
      es: 'Llevo más de 15 años escribiendo campañas para marcas que probablemente reconoces.',
      en: 'I’ve spent over 15 years writing campaigns for brands you probably know.',
    } as Bilingual,
    paragraphs: [
      {
        es: 'He pasado por Ogilvy, McCann, Droga5, Wieden+Kennedy, Wunderman Thompson y MullenLowe antes de llegar a Digitas, donde hoy soy Production Creative Director.',
        en: 'I’ve worked at Ogilvy, McCann, Droga5, Wieden+Kennedy, Wunderman Thompson and MullenLowe before joining Digitas, where I’m now Production Creative Director.',
      } as Bilingual,
      {
        es: 'Mi trabajo actual vive en la intersección entre el craft publicitario y la producción con IA generativa. No como experimento, sino como flujo de trabajo real: guiones, videos y campañas completas para clientes como UCSUR, SISE y Cinemark Perú, producidos con un stack propio que combina IA de imagen, video y audio.',
        en: 'My work today lives at the intersection of advertising craft and generative AI production. Not as an experiment, but as a real workflow: scripts, videos and full campaigns for clients like UCSUR, SISE and Cinemark Perú, produced with a custom stack that combines image, video and audio AI.',
      } as Bilingual,
      {
        es: 'También enseño. En la UPC, en workshops para equipos creativos, y en sesiones donde la pregunta no es «¿la IA reemplaza al creativo?» sino «¿cómo usas esto para pensar mejor y producir más rápido?».',
        en: 'I also teach. At UPC, in workshops for creative teams, and in sessions where the question isn’t “does AI replace the creative?” but “how do you use this to think better and produce faster?”.',
      } as Bilingual,
      {
        es: 'Si te interesa trabajar con alguien que sabe escribir y sabe promptear, hablamos.',
        en: 'If you’re interested in working with someone who knows how to write and how to prompt, let’s talk.',
      } as Bilingual,
    ],
    highlights: [
      { value: '15+', label: { es: 'años de craft', en: 'years of craft' } },
      { value: '6+', label: { es: 'agencias globales', en: 'global agencies' } },
      { value: 'IA', label: { es: 'producción generativa', en: 'generative production' } },
    ] as Highlight[],
    skills: [
      { es: 'Copywriting', en: 'Copywriting' },
      { es: 'Dirección creativa', en: 'Creative Direction' },
      { es: 'Producción con IA', en: 'AI Production' },
      { es: 'Guion', en: 'Scriptwriting' },
      { es: 'Campañas 360', en: '360 Campaigns' },
      { es: 'Performance / Meta Ads', en: 'Performance / Meta Ads' },
      { es: 'Branding', en: 'Branding' },
      { es: 'Docencia', en: 'Teaching' },
    ] as Bilingual[],
  },

  /** WORK / PROJECTS — modular: agrega o quita objetos libremente */
  projects: [
    {
      slug: 'ucsur-norte',
      title: { es: 'UCSUR — Dale Norte a Tu Futuro', en: 'UCSUR — Dale Norte a Tu Futuro' },
      category: { es: 'Campaña universitaria', en: 'University campaign' },
      year: '2025–2026',
      description: {
        es: 'Concepto y producción de una campaña integral para el Campus Norte: guiones, Meta Ads y video con IA.',
        en: 'Concept and production of an integrated campaign for the North Campus: scripts, Meta Ads and AI video.',
      },
      tags: ['Educación', 'Video IA', 'Campaña 360'],
      image: '/images/projects/ucsur-norte.svg',
      alt: { es: 'Campaña UCSUR Dale Norte a Tu Futuro', en: 'UCSUR Dale Norte a Tu Futuro campaign' },
    },
    {
      slug: 'ucsur-ingenierias',
      title: { es: 'UCSUR — Ingenierías que Mejoran el Mundo', en: 'UCSUR — Ingenierías que Mejoran el Mundo' },
      category: { es: 'Campaña universitaria', en: 'University campaign' },
      year: '2025',
      description: {
        es: 'Arquitectura creativa completa: concepto, copy de performance para 13+ carreras y landing page.',
        en: 'Full creative architecture: concept, performance copy for 13+ programs and a landing page.',
      },
      tags: ['Educación', 'Performance', 'Copywriting'],
      image: '/images/projects/ucsur-ingenierias.svg',
      alt: { es: 'Campaña UCSUR Ingenierías', en: 'UCSUR Engineering campaign' },
    },
    {
      slug: 'ucsur-medicina',
      title: { es: 'UCSUR — Medicina Humana', en: 'UCSUR — Human Medicine' },
      category: { es: 'Campaña universitaria', en: 'University campaign' },
      year: '2025',
      description: {
        es: 'Posicionamiento de triple acreditación con realidad mixta: scripts, Meta Ads y video con IA.',
        en: 'Triple-accreditation positioning with mixed reality: scripts, Meta Ads and AI video.',
      },
      tags: ['Educación', 'Innovación', 'Video IA'],
      image: '/images/projects/ucsur-medicina.svg',
      alt: { es: 'Campaña UCSUR Medicina Humana', en: 'UCSUR Human Medicine campaign' },
    },
    {
      slug: 'sise-aon',
      title: { es: 'SISE — AON Abril', en: 'SISE — AON April' },
      category: { es: 'Campaña de performance', en: 'Performance campaign' },
      year: '2026',
      description: {
        es: '153+ piezas de Meta Ads para múltiples carreras técnicas, con un sistema de copy escalable.',
        en: '153+ Meta Ads pieces for multiple technical programs, built on a scalable copy system.',
      },
      tags: ['Performance', 'Meta Ads', 'Educación'],
      image: '/images/projects/sise-aon.svg',
      alt: { es: 'Campaña de performance SISE', en: 'SISE performance campaign' },
    },
    {
      slug: 'cinemark-comfort',
      title: { es: 'Cinemark — Salas Comfort', en: 'Cinemark — Comfort Theaters' },
      category: { es: 'Retail / Entretenimiento', en: 'Retail / Entertainment' },
      year: '2025',
      description: {
        es: 'Concepto y guion de un spot de 30". Dirección visual con producción en IA.',
        en: 'Concept and script for a 30" spot. Visual direction with AI production.',
      },
      tags: ['Entretenimiento', 'Video IA', 'Spot'],
      image: '/images/projects/cinemark-comfort.svg',
      alt: { es: 'Spot Cinemark Salas Comfort', en: 'Cinemark Comfort Theaters spot' },
    },
    {
      slug: 'certamed-manifesto',
      title: { es: 'CertaMed — Brand Manifesto', en: 'CertaMed — Brand Manifesto' },
      category: { es: 'Branding / Video', en: 'Branding / Video' },
      year: '2025',
      description: {
        es: 'Naming participativo y guion de un manifiesto de marca de 70" para la clínica de Científica del Sur.',
        en: 'Participatory naming and a 70" brand manifesto script for the Científica del Sur clinic.',
      },
      tags: ['Salud', 'Branding', 'Guion'],
      image: '/images/projects/certamed-manifesto.svg',
      alt: { es: 'Brand manifesto CertaMed', en: 'CertaMed brand manifesto' },
    },
    {
      slug: 'cotizador-ia',
      title: { es: 'Cotizador de Videos IA', en: 'AI Video Quoting Tool' },
      category: { es: 'Herramienta interna', en: 'Internal tool' },
      year: '2025–2026',
      description: {
        es: 'Sistema en Excel + skill de Claude para cotizar producción audiovisual con IA en soles. Versiones Standard y Premium.',
        en: 'Excel system + a Claude skill to quote AI audiovisual production in soles. Standard and Premium tiers.',
      },
      tags: ['Productividad', 'IA', 'Herramienta'],
      image: '/images/projects/cotizador-ia.svg',
      alt: { es: 'Cotizador de videos con IA', en: 'AI video quoting tool' },
    },
  ] as Project[],

  /** EXPERIENCE — modular */
  experience: [
    {
      role: { es: 'Production Creative Director', en: 'Production Creative Director' },
      company: 'Digitas Perú — Publicis Groupe',
      period: { es: 'Actualidad', en: 'Present' },
    },
    {
      role: { es: 'Senior Copywriter / Creative Prompter', en: 'Senior Copywriter / Creative Prompter' },
      company: 'Digitas Perú — Publicis Groupe',
      period: { es: 'Trayectoria previa', en: 'Earlier' },
    },
    {
      role: { es: 'Creative Director', en: 'Creative Director' },
      company: 'Regional · Centroamérica',
      period: { es: 'Trayectoria previa', en: 'Earlier' },
    },
    {
      role: { es: 'Senior Copywriter', en: 'Senior Copywriter' },
      company: 'Wunderman Thompson · MullenLowe',
      period: { es: 'Trayectoria previa', en: 'Earlier' },
    },
    {
      role: { es: 'Copywriter', en: 'Copywriter' },
      company: 'Ogilvy · McCann · Droga5 · Wieden+Kennedy',
      period: { es: 'Trayectoria previa', en: 'Earlier' },
    },
    {
      role: { es: 'Docente · Redacción Publicitaria', en: 'Lecturer · Copywriting' },
      company: 'UPC',
      period: { es: 'Trayectoria previa', en: 'Earlier' },
    },
  ] as ExperienceItem[],

  /** CONTACT */
  contact: {
    label: { es: 'Contacto', en: 'Contact' } as Bilingual,
    headline: {
      es: 'El que escribe y el que promptea.',
      en: 'The one who writes and the one who prompts.',
    } as Bilingual,
    sub: {
      es: 'Si te interesa trabajar con alguien que sabe escribir y sabe promptear, hablamos.',
      en: 'If you’re interested in working with someone who knows how to write and how to prompt, let’s talk.',
    } as Bilingual,
    email: 'rafoarias@gmail.com', // TODO: confirmar email de contacto
    cta: { es: 'Escríbeme', en: 'Email me' } as Bilingual,
  },

  /** SOCIAL / FOOTER LINKS */
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rafoarias/' },
    { label: 'Behance', url: 'https://www.behance.net/rafaelarias' },
    { label: 'Web', url: 'https://www.rafaelarias.com' },
  ],
};

export type SiteContent = typeof content;
