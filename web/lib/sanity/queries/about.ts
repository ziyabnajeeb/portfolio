import { groq } from 'next-sanity'

export const aboutQuery = groq`*[_type == "about"][0]{
  headline,
  bio,
  philosophy,
  image,
  stats[]{ label, value }
}`
