export default {
  name: 'models',
  type: 'document',
  title: 'Corona Cannon Models',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
      required: true,
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
      title: 'Process Steps',
      name: 'processSteps',
      type: 'array',
      of: [{type: 'processStep'}],
    },
  ]
}
