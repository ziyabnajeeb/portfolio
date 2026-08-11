import { groq } from 'next-sanity'

export const educationListQuery = groq`*[_type == "education"] | order(orderRank asc){
  _id,
  degree,
  institution,
  orderRank
}`
