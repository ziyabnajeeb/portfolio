import { defineField, defineType } from 'sanity'

export const stat = defineType({
  name: 'stat',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g. "14+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "Years of Experience"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
})
