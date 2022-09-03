const decimal = require('./filters/decimal.cjs')
const util = require('node:util')
const { shortcodes: html } = require('./shortcodes/html.cjs')
const isAsyncFunction = require('./util/isAsyncFunction.cjs')
const safetify = require('./util/safetify.cjs')

const safeHtml = {}
for (const fn in html) {
  safeHtml[fn] = safetify(html[fn])
}

const inspect = (...args) =>
  args.forEach((arg) => console.log(util.inspect(arg, false, null, true)))

const filters = { decimal, inspect, ...safeHtml }

module.exports = (eleventyConfig) => {
  for (const filter in filters) {
    const fn = filters[filter]
    const isAsync = isAsyncFunction(fn)
    isAsync
      ? eleventyConfig.addAsyncFilter(filter, fn)
      : eleventyConfig.addFilter(filter, fn)
  }

  // we can bail out to F.<tag> as a function
  eleventyConfig.addGlobalData('F', filters)
}
