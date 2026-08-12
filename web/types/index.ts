export type PortableTextBlock = {
  _type: string
  _key: string
  [key: string]: unknown
}

export interface SanityImage {
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
  alt?: string
  _key?: string
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'other'
  url: string
}

export interface Cta {
  label: string
  href: string
}

export interface Stat {
  label: string
  value: string
}

export interface SiteSettings {
  siteTitle: string
  siteDescription: string
  name: string
  email: string
  phone?: string
  location?: string
  resumeUrl?: string
  logo?: SanityImage
  favicon?: SanityImage
  socialLinks?: SocialLink[]
}

export interface Seo {
  metaTitle: string
  metaDescription: string
  ogImage?: SanityImage
  keywords?: string[]
}

export interface Hero {
  greeting?: string
  name: string
  roles: string[]
  summary: string
  yearsOfExperience: number
  image?: SanityImage
  ctas?: Cta[]
}

export interface About {
  headline: string
  bio: PortableTextBlock[]
  philosophy?: PortableTextBlock[]
  image?: SanityImage
  stats?: Stat[]
}

export interface ExperienceProject {
  _key: string
  name: string
  role?: string
  technologies?: string[]
  description: PortableTextBlock[]
}

export interface Experience {
  _id: string
  company: string
  companyLogo?: SanityImage
  companyDescription?: string
  role: string
  location?: string
  description?: PortableTextBlock[]
  technologies?: string[]
  projects?: ExperienceProject[]
  startDate: string
  endDate?: string
  current: boolean
  orderRank: string
}

export interface Education {
  _id: string
  degree: string
  institution: string
  orderRank: string
}

export interface Skill {
  _id: string
  name: string
  icon: string
  orderRank: string
}

export interface SkillCategory {
  _id: string
  title: string
  orderRank: string
  skills: Skill[]
}

export type ProjectCategory =
  | 'engineering'
  | 'logo-design'
  | 'branding'
  | 'illustration'
  | 'ui-mockup'
  | 'other'

export interface ProjectCard {
  _id: string
  title: string
  slug: string
  category: ProjectCategory
  role?: string
  excerpt: string
  thumbnail: SanityImage
  technologies: string[]
  featured: boolean
  orderRank: string
  publishedDate?: string
}

export interface ProjectDetail {
  _id: string
  title: string
  slug: string
  category: ProjectCategory
  role?: string
  company?: string
  excerpt: string
  thumbnail: SanityImage
  gallery?: SanityImage[]
  overview?: PortableTextBlock[]
  challenge?: PortableTextBlock[]
  solution?: PortableTextBlock[]
  keyFeatures?: string[]
  results?: PortableTextBlock[]
  lessonsLearned?: PortableTextBlock[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  orderRank: string
  publishedDate?: string
}

export interface AdjacentProject {
  title: string
  slug: string
}

export interface AdjacentProjects {
  prev: AdjacentProject | null
  next: AdjacentProject | null
}
