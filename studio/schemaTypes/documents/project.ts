import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'What kind of work this is — controls which fields are most relevant.',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Logo Design', value: 'logo-design' },
          { title: 'Branding', value: 'branding' },
          { title: 'Illustration', value: 'illustration' },
          { title: 'UI Mockup', value: 'ui-mockup' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'engineering',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. "Fullstack", "UI Developer"',
    }),
    defineField({
      name: 'company',
      title: 'Company / Context',
      type: 'string',
      description: 'e.g. "Royal Cyber" — optional context for client engagements.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'galleryImage' }],
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What was built and why it mattered.',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'lessonsLearned',
      title: 'Lessons Learned',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Shows this project in the Home infinite carousel.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'role', media: 'thumbnail' },
  },
})
