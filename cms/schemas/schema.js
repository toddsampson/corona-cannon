import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import models from './models'
import page from './page'
import processStep from './processStep'
import productPart from './productPart'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    models,
    page,
    processStep,
    productPart,
  ])
})
