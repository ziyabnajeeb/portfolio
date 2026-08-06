import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0]{
  greeting,
  name,
  roles,
  summary,
  yearsOfExperience,
  image,
  ctas[]{ label, href }
}`
