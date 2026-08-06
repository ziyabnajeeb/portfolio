import { groq } from 'next-sanity'

export const experienceListQuery = groq`*[_type == "experience"] | order(order asc){
  _id,
  company,
  companyLogo,
  companyDescription,
  role,
  location,
  description,
  technologies,
  startDate,
  endDate,
  current,
  order
}`
