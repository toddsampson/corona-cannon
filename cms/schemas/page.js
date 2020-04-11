export default {
  name: 'page',
  type: 'document',
  title: 'Basic Site Pages',
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
      name: 'pageBody',
      type: 'array', 
      title: 'Page Body',
      required: true,
      of: [
        {type: 'block'},
        {type: 'image'},
      ]
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
    },
  ]
}
