import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Frontend", "Backend", "Design Tools"',
      validation: (Rule) => Rule.required(),
    }),
    orderRankField({ type: 'skillCategory' }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: { title: 'title' },
  },
})
