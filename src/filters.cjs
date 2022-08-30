const decimal = require('./filters/decimal.cjs')
const filters = { decimal }

module.exports = (eleventyConfig) => {
  for (const filter in filters) {
    const fn = filters[filter]
    const isAsync = fn.constructor.name === 'AsyncFunction'
    console.log('typeof', typeof fn, fn.constructor.name, isAsync)
    isAsync
      ? eleventyConfig.addAsyncFilter(filter, fn)
      : eleventyConfig.addFilter(filter, fn)
  }
}
