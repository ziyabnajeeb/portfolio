import { createClient } from '@sanity/client'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset =
  process.env.SANITY_STUDIO_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID (or NEXT_PUBLIC_SANITY_PROJECT_ID)')
}
if (!token) {
  throw new Error(
    'Missing SANITY_API_TOKEN. Create an Editor-permission token at sanity.io/manage and add it to studio/.env.local'
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

function key() {
  return crypto.randomUUID().slice(0, 12)
}

function block(text) {
  return {
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: key(), text, marks: [] }],
  }
}

function blocks(...texts) {
  return texts.map(block)
}

function ref(id) {
  return { _type: 'reference', _ref: id }
}

// ---------------------------------------------------------------------------
// Singletons
// ---------------------------------------------------------------------------

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteTitle: 'Ziyab Najeeb — Senior UI/UX Engineer',
  siteDescription:
    'Portfolio of Ziyab Najeeb, a Senior UI/UX Engineer with 14+ years building scalable React, Next.js, and Salesforce Commerce Cloud experiences.',
  name: 'Ziyab Najeeb',
  email: 'ziyabnajeeb@gmail.com',
  phone: '+92 321 2388177',
  location: 'Karachi, Pakistan',
  socialLinks: [{ _key: key(), platform: 'email', url: 'mailto:ziyabnajeeb@gmail.com' }],
}

const hero = {
  _id: 'hero',
  _type: 'hero',
  greeting: "Hi, I'm",
  name: 'Ziyab Najeeb',
  roles: [
    'Senior UI/UX Engineer',
    'React.js & Next.js Developer',
    'Salesforce SFRA Specialist',
    'Full-Stack MERN Developer',
  ],
  summary:
    '14+ years building scalable, high-performance web applications — from pixel-perfect React and Next.js interfaces to full-stack Salesforce Commerce Cloud storefronts. I turn complex requirements into fast, accessible, production-ready products.',
  yearsOfExperience: 14,
  ctas: [{ _key: key(), label: 'View Projects', href: '#projects' }],
}

const about = {
  _id: 'about',
  _type: 'about',
  headline: 'About Me',
  bio: blocks(
    "I'm a Senior UI/UX Engineer with over 14 years of experience building scalable, responsive web applications — from early jQuery and HTML5/CSS3 work to modern React, Next.js, and TypeScript architectures.",
    "Most of that time has been spent inside Salesforce Commerce Cloud (SFRA/SiteGenesis), optimizing storefront performance and user experience for enterprise eCommerce clients, alongside full-stack MERN projects built with Express.js, Hono.js, and MongoDB.",
    'I care about clean component architecture, functional programming practices, and interfaces that are as fast as they are polished — working across design systems like Tailwind CSS, shadcn/ui, React Bootstrap, and Material UI, with Photoshop, Illustrator, and Adobe XD rounding out the workflow from wireframe to shipped product.'
  ),
  philosophy: blocks(
    'Good frontend engineering should be invisible — it just feels fast, clear, and trustworthy. I favor efficient RESTful APIs, functional programming patterns, and design systems that keep a codebase consistent as it scales, and I like adapting quickly to whatever stack a project actually calls for.'
  ),
  stats: [
    { _key: key(), value: '14+', label: 'Years of Experience' },
    { _key: key(), value: '7+', label: 'Client Projects Delivered' },
    { _key: key(), value: 'MERN', label: 'Full-Stack Capable' },
  ],
}

const seo = {
  _id: 'seo',
  _type: 'seo',
  metaTitle: 'Ziyab Najeeb — Senior UI/UX Engineer | React, Next.js, SFRA',
  metaDescription:
    'Portfolio of Ziyab Najeeb, a Senior UI/UX Engineer with 14+ years of experience building scalable React, Next.js, and Salesforce Commerce Cloud applications.',
  keywords: ['React', 'Next.js', 'TypeScript', 'Salesforce SFRA', 'Frontend Engineer', 'UI/UX Engineer'],
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

// companyLogo is intentionally not seeded here — it's a real image asset,
// not scriptable content. Upload it directly on this document in Studio.
const experienceRoyalCyber = {
  _id: 'experience-royal-cyber',
  _type: 'experience',
  company: 'Royal Cyber Inc.',
  companyDescription:
    'A globally recognized, award-winning technology partner helping companies imagine, execute, and accelerate their digital transformation journey for over 20 years.',
  role: 'Senior UI Frontend Developer',
  location: 'Karachi, Pakistan',
  description: blocks(
    'Leading frontend development across multiple client engagements, specializing in React.js, Next.js, and Salesforce Commerce Cloud (SFRA/SiteGenesis). Responsible for building scalable, responsive UIs, optimizing storefront performance, and delivering full-stack features across the MERN stack.'
  ),
  technologies: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript (ES6)',
    'Salesforce SFRA',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'jQuery',
    'SCSS',
  ],
  startDate: '2012-12-01',
  current: true,
  order: 1,
}

// ---------------------------------------------------------------------------
// Skill categories + skills
// ---------------------------------------------------------------------------

const skillCategories = [
  { _id: 'skillCategory-frontend', _type: 'skillCategory', title: 'Frontend', order: 1 },
  { _id: 'skillCategory-backend', _type: 'skillCategory', title: 'Backend', order: 2 },
  { _id: 'skillCategory-platforms', _type: 'skillCategory', title: 'Platforms', order: 3 },
  { _id: 'skillCategory-design-tools', _type: 'skillCategory', title: 'Design Tools', order: 4 },
  { _id: 'skillCategory-tools', _type: 'skillCategory', title: 'Tools & Workflow', order: 5 },
]

const skills = [
  // Frontend
  { name: 'React', icon: 'react', category: 'skillCategory-frontend' },
  { name: 'Next.js', icon: 'nextjs', category: 'skillCategory-frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'skillCategory-frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'skillCategory-frontend' },
  { name: 'HTML5', icon: 'html5', category: 'skillCategory-frontend' },
  { name: 'CSS3', icon: 'css3', category: 'skillCategory-frontend' },
  { name: 'Sass/SCSS', icon: 'sass', category: 'skillCategory-frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'skillCategory-frontend' },
  { name: 'Material UI', icon: 'materialui', category: 'skillCategory-frontend' },
  { name: 'React Bootstrap', icon: 'bootstrap', category: 'skillCategory-frontend' },
  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'skillCategory-backend' },
  { name: 'Express.js', icon: 'express', category: 'skillCategory-backend' },
  { name: 'Hono.js', icon: 'hono', category: 'skillCategory-backend' },
  { name: 'MongoDB', icon: 'mongodb', category: 'skillCategory-backend' },
  // Platforms
  { name: 'Salesforce Commerce Cloud (SFRA)', icon: 'salesforce', category: 'skillCategory-platforms' },
  // Design Tools
  { name: 'Photoshop', icon: 'photoshop', category: 'skillCategory-design-tools' },
  { name: 'Illustrator', icon: 'illustrator', category: 'skillCategory-design-tools' },
  { name: 'Adobe XD', icon: 'adobexd', category: 'skillCategory-design-tools' },
  // Tools & Workflow
  { name: 'Git', icon: 'git', category: 'skillCategory-tools' },
  { name: 'Webpack', icon: 'webpack', category: 'skillCategory-tools' },
  { name: 'npm', icon: 'npm', category: 'skillCategory-tools' },
  { name: 'GSAP', icon: 'gsap', category: 'skillCategory-tools' },
].map((skill, index) => ({
  _id: `skill-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
  _type: 'skill',
  name: skill.name,
  icon: skill.icon,
  category: ref(skill.category),
  order: index + 1,
}))

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

const projects = [
  {
    _id: 'project-filmtastic',
    title: 'FilmTastic',
    role: 'Fullstack',
    company: 'Royal Cyber',
    excerpt:
      'A web scraping application that gathers and displays movie data from multiple sources, built with server-side rendering for performance and SEO.',
    overview: blocks(
      'Contributing to the development of FilmTastic, a web scraping application that gathers and displays movie data from multiple sources using Puppeteer.'
    ),
    solution: blocks(
      'Built the frontend with Next.js and React.js leveraging server-side rendering, styled with Tailwind CSS and shadcn/ui for a responsive, consistent UI, and typed end-to-end with TypeScript. The project was structured as an Nx Monorepo for shared libraries and dependency management. Backend services were built with Express.js, with JWT authentication securing user access and MongoDB handling data storage. API endpoints serve dynamic scraped movie data in real time.'
    ),
    keyFeatures: [
      'Server-side rendering for SEO',
      'Puppeteer-based scraping pipeline',
      'JWT authentication',
      'Nx Monorepo structure',
      'MongoDB-backed movie data API',
    ],
    technologies: ['React.js', 'Next.js', 'Puppeteer', 'Tailwind CSS', 'Shadcn UI', 'TypeScript', 'Express.js', 'MongoDB', 'JWT'],
    featured: true,
    order: 1,
  },
  {
    _id: 'project-white-cap',
    title: 'White-Cap',
    role: 'UI Developer',
    company: 'Brambleberry',
    excerpt:
      'An interactive product visualization feature with animated, contextual image markers built for a Salesforce Commerce Cloud storefront.',
    overview: blocks(
      'Developed the White-Cap project, focusing on dynamic image handling and interactive user experience — animated markers on images, categorized to surface contextual information based on user interaction.'
    ),
    solution: blocks(
      'Used GSAP (GreenSock Animation Platform) to animate the markers smoothly, React.js with TypeScript for a type-safe, maintainable structure, and a responsive layout built with Tailwind CSS and shadcn/ui. Users can switch between images while corresponding markers update accordingly.'
    ),
    keyFeatures: ['Animated, categorized image markers', 'Image-switching with synced marker state', 'GSAP-driven micro-interactions'],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'GSAP'],
    featured: true,
    order: 2,
  },
  {
    _id: 'project-brambleberry-sfcc',
    title: 'Brambleberry — SFCC Storefront',
    role: 'UI Developer',
    company: 'Brambleberry',
    excerpt: 'Multiple storefront modules for an eCommerce site built on Salesforce Commerce Cloud (SFRA), from Home through Checkout.',
    overview: blocks(
      'Designed and developed various modules of an eCommerce site using SFCC SFRA architecture — Home Page, Product, Cart, Checkout, Sort & Filter, Article, Mobile Navigation, and Quick View, built from scratch on ISML, SCSS, and client-side JS.'
    ),
    solution: blocks(
      "Implemented Google AVS 2.0 and reCAPTCHA as reusable components usable across checkout and account pages. Followed functional JavaScript best practices, blending ES6 with jQuery where needed. Built required pages in Page Designer, set up npm/Webpack for linting and prod/dev builds, and upgraded the project's Node version from 6 to 14."
    ),
    keyFeatures: ['Reusable Google AVS 2.0 & reCAPTCHA components', 'Page Designer authoring', 'Npm/Webpack build pipeline', 'Node 6 → 14 upgrade'],
    technologies: ['Salesforce SFRA', 'jQuery', 'JavaScript', 'HTML5', 'SCSS', 'Bootstrap 4', 'ISML', 'Webpack'],
    featured: false,
    order: 3,
  },
  {
    _id: 'project-covid19-dashboard',
    title: 'Covid-19 Dashboard',
    role: 'Frontend Developer',
    excerpt: 'A COVID-19 data dashboard built from scratch with React, featuring live data via REST API.',
    overview: blocks(
      'Complete UI built with React, HTML5, JavaScript ES6, Tailwind CSS, and Styled Components, consuming a REST API with Axios and managing state with Redux, in an organized component structure.'
    ),
    technologies: ['React', 'JavaScript (ES6)', 'Tailwind CSS', 'Styled Components', 'Axios', 'Redux'],
    featured: false,
    order: 4,
  },
  {
    _id: 'project-memories-app',
    title: 'Memories App',
    role: 'Fullstack',
    excerpt: 'A full-stack MERN application with a clean, MVC-structured REST API.',
    overview: blocks(
      'Built the complete UI with React, JavaScript ES6, and React-Bootstrap, backed by an Express.js REST API following an MVC approach for clean, maintainable code, with MongoDB and Mongoose for data.'
    ),
    technologies: ['React', 'React-Bootstrap', 'Redux', 'Express.js', 'MongoDB', 'Mongoose'],
    featured: false,
    order: 5,
  },
  {
    _id: 'project-winzone-intranet',
    title: 'WinZone Intranet',
    role: 'UI Developer',
    excerpt: 'An intranet portal built from scratch with HTML5, SCSS, and Angular.',
    overview: blocks(
      'Developed the UI from scratch using HTML5, Flexgrid, and SCSS, then implemented interactive components with Angular, TypeScript, and SCSS, in an organized component structure.'
    ),
    technologies: ['HTML5', 'CSS3', 'SCSS', 'Angular', 'TypeScript'],
    featured: false,
    order: 6,
  },
  {
    _id: 'project-aramark-supplier-marketplace',
    title: 'Aramark Supplier Marketplace',
    role: 'UI Developer',
    excerpt: 'A supplier marketplace UI built for a WebSphere Portal environment.',
    overview: blocks('Developed the UI from scratch using HTML5, Bootstrap, and SCSS, with jQuery handling client-side scripting.'),
    technologies: ['HTML5', 'Bootstrap', 'SCSS', 'jQuery', 'WebSphere Portal'],
    featured: false,
    order: 7,
  },
].map((project) => ({
  ...project,
  _type: 'project',
  slug: { _type: 'slug', current: project._id.replace(/^project-/, '') },
}))

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

async function seed() {
  const documents = [siteSettings, hero, about, seo, experienceRoyalCyber, ...skillCategories, ...skills, ...projects]

  let tx = client.transaction()
  for (const doc of documents) {
    tx = tx.createOrReplace(doc)
  }

  await tx.commit()

  console.log(`Seeded ${documents.length} documents:`)
  console.log(`  4 singletons (siteSettings, hero, about, seo)`)
  console.log(`  1 experience entry`)
  console.log(`  ${skillCategories.length} skill categories, ${skills.length} skills`)
  console.log(`  ${projects.length} projects`)
  console.log('')
  console.log('Note: projects have no thumbnail image yet (required field) — Studio will')
  console.log('flag them as invalid until you add one. Everything else is ready to review.')
}

seed().catch((error) => {
  console.error('Seed failed:', error.message)
  process.exit(1)
})
