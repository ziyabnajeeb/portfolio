import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the logo for accessibility and SEO.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'companyDescription',
      title: 'Company Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: { dateFormat: 'MMM YYYY' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: { dateFormat: 'MMM YYYY' },
      hidden: ({ document }) => Boolean(document?.current),
    }),
    defineField({
      name: 'current',
      title: 'Current Position',
      type: 'boolean',
      initialValue: false,
    }),
    orderRankField({ type: 'experience' }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: { title: 'role', subtitle: 'company', media: 'companyLogo' },
  },
})
