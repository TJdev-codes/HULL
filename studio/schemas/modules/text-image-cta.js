import customImage from '../../lib/custom-image'

export default {
  name: 'textImageCta',
  type: 'object',
  title: 'Text w Image CTA',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline'
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      name: 'cta',
      type: 'object',
      title: 'CTA',
      fields: [
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text'
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL'
        }
      ]
    }
  ]
}
