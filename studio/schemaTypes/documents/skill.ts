import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'skillCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Key',
      type: 'string',
      description:
        'Identifier resolved to an icon in the web app icon registry (e.g. "react", "typescript").',
      validation: (Rule) => Rule.required(),
    }),
    orderRankField({ type: 'skill' }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: { title: 'name', subtitle: 'category.title' },
  },
})
