export default {
  name: 'productPart',
  type: 'object',
  title: 'Product Part',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Item Name',
      required: true,
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      default: 1,
      required: true,
    },
    {
      name: 'units',
      type: 'string',
      title: 'Units',
      required: false,
    },
    {
      name: 'urls',
      type: 'array',
      title: 'URLs',
      of: [{
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https']
        }),
      }],
    },
  ]
}
