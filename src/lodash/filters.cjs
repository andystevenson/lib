const lodash = require('lodash')
const functions = require('./functions.cjs')
const safetify = require('../util/safetify.cjs')

const filters = functions.reduce((methods, method) => {
  const exists = method in lodash
  const isFunction = exists ? typeof lodash[method] === 'function' : true

  if (exists && isFunction) {
    methods[method] = safetify(lodash[method])
    return methods
  }

  !exists && console.log(`${method} is not a property of lodash`)
  !isFunction && console.log(`${method} is not a function of lodash`)
  return methods
}, {})

module.exports = filters
