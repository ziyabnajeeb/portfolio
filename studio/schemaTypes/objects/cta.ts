import { defineField, defineType } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'string',
      description: 'Internal anchor (e.g. "#projects") or an external URL.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
})
