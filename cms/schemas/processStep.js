export default {
  name: 'processStep',
  type: 'document',
  title: 'Process Step',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
      required: true,
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
      name: 'stepImage',
      type: 'image',
      title: 'Step Image',
    },
  ]
}
