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
      title: 'Background Type',
      name: 'bgType',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'photos',
      type: 'object',
      fields: [
        customImage({
          title: 'Background Photo (mobile)',
          name: 'mobilePhoto'
        }),
        customImage({
          title: 'Background Photo (desktop)',
          name: 'desktopPhoto'
        })
      ],
      hidden: ({ parent }) => {
        return parent.bgType !== 'photo'
      }
    },
    {
      name: 'cta',
      type: 'object',
      title: 'CTA',
      fields: [
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text',
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        }
      ]
    }
  ]
}
