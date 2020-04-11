import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import models from './models'
import page from './page'
import processStep from './processStep'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    models,
    page,
    processStep,
  ])
})
