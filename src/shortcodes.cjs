const util = require('node:util')
const { shortcodes: html } = require('./shortcodes/html.cjs')
const isAsyncFunction = require('./util/isAsyncFunction.cjs')

const inspect = (...args) => {
  args.forEach((arg) => console.log(util.inspect(arg, false, null, true)))
  return ''
}

const shortcodes = {
  ...html,
  inspect,
}

module.exports = (eleventyConfig) => {
  for (const shortcode in shortcodes) {
    const fn = shortcodes[shortcode]
    const isAsync = isAsyncFunction(fn)
    isAsync
      ? eleventyConfig.addAsyncShortcode(shortcode, fn)
      : eleventyConfig.addShortcode(shortcode, fn)
  }

  // we can bail out to F.<tag> as a function
  eleventyConfig.addGlobalData('S', shortcodes)
}
