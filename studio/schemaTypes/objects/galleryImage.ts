import { defineField, defineType } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
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
  preview: {
    select: { title: 'alt' },
  },
})
