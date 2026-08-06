import { groq } from 'next-sanity'

export const skillCategoriesQuery = groq`*[_type == "skillCategory"] | order(orderRank asc){
  _id,
  title,
  orderRank,
  "skills": *[_type == "skill" && references(^._id)] | order(orderRank asc){
    _id,
    name,
    icon,
    orderRank
  }
}`
