import { groq } from 'next-sanity'

const projectCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  category,
  role,
  excerpt,
  thumbnail,
  technologies,
  featured,
  orderRank,
  publishedDate
`

export const allProjectsQuery = groq`*[_type == "project"] | order(orderRank asc){${projectCardFields}}`

export const projectSlugsQuery = groq`*[_type == "project"]{"slug": slug.current}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  role,
  company,
  excerpt,
  thumbnail,
  gallery,
  overview,
  challenge,
  solution,
  keyFeatures,
  results,
  lessonsLearned,
  technologies,
  githubUrl,
  liveUrl,
  orderRank,
  publishedDate
}`

export const adjacentProjectsQuery = groq`{
  "prev": *[_type == "project" && orderRank < $orderRank] | order(orderRank desc)[0]{ title, "slug": slug.current },
  "next": *[_type == "project" && orderRank > $orderRank] | order(orderRank asc)[0]{ title, "slug": slug.current }
}`
