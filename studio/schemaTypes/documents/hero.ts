import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      description: 'e.g. "Hi, I\'m"',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roles',
      title: 'Rotating Roles',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Titles that animate/cycle in the hero (e.g. "React.js Developer", "Next.js Engineer", "SFRA Specialist").',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      description: 'Short value-proposition paragraph shown under the name.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Portrait',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'ctas',
      title: 'Call to Actions',
      type: 'array',
      of: [{ type: 'cta' }],
      validation: (Rule) => Rule.max(2),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'summary' },
  },
})
