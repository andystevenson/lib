const filters = require('./lodash/filters.cjs')

module.exports = function (eleventyConfig) {
  // add all the filter methods
  for (const filter in filters) {
    eleventyConfig.addFilter(filter, filters[filter])
  }

  // add a way to access them all globally
  eleventyConfig.addGlobalData('_', filters)
}
