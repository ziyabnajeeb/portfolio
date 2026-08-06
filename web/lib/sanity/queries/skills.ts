import { groq } from 'next-sanity'

export const skillCategoriesQuery = groq`*[_type == "skillCategory"] | order(order asc){
  _id,
  title,
  order,
  "skills": *[_type == "skill" && references(^._id)] | order(order asc){
    _id,
    name,
    icon,
    order
  }
}`
