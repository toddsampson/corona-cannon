export default {
  name: 'models',
  type: 'document',
  title: 'Corona Cannon Models',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      required: false,
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      required: true,
      options: {
        source: 'name',
        maxLength: 96,
      }
    },
    {
      name: 'description',
      type: 'array', 
      title: 'Description',
      required: true,
      of: [
        {type: 'block'},
        {type: 'image'},
      ]
    },
    {
      name: 'displayImage',
      type: 'image',
      title: 'Display Image',
    },
    {
      name: 'featuredModel',
      type: 'boolean',
      title: 'Featured Model',
    },
    {
      title: 'Process Steps',
      name: 'processSteps',
      type: 'array',
      of: [{type: 'processStep'}],
    },
  ]
}
