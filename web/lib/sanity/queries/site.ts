import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  siteDescription,
  name,
  email,
  phone,
  location,
  "resumeUrl": resume.asset->url,
  logo,
  favicon,
  socialLinks[]{ platform, url }
}`

export const seoQuery = groq`*[_type == "seo"][0]{
  metaTitle,
  metaDescription,
  ogImage,
  keywords
}`
