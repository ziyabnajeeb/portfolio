import { siteSettings } from './documents/siteSettings'
import { hero } from './documents/hero'
import { about } from './documents/about'
import { seo } from './documents/seo'
import { experience } from './documents/experience'
import { project } from './documents/project'
import { skillCategory } from './documents/skillCategory'
import { skill } from './documents/skill'
import { socialLink } from './objects/socialLink'
import { cta } from './objects/cta'
import { stat } from './objects/stat'
import { galleryImage } from './objects/galleryImage'

export const schemaTypes = [
  // Singletons
  siteSettings,
  hero,
  about,
  seo,
  // Collections
  experience,
  project,
  skillCategory,
  skill,
  // Objects
  socialLink,
  cta,
  stat,
  galleryImage,
]

export const SINGLETON_TYPES = new Set(['siteSettings', 'hero', 'about', 'seo'])
