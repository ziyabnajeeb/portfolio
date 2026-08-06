import { groq } from 'next-sanity'

export const experienceListQuery = groq`*[_type == "experience"] | order(orderRank asc){
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
  orderRank
}`
