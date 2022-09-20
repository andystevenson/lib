const { NODE_ENV, WEBSITE_NAME, WEBSITE } = process.env

const globalData = {
  env: process.env,
  build: NODE_ENV === 'production' ? NODE_ENV : 'development',
  meta: {
    title: WEBSITE ? WEBSITE_NAME : "Andy Stevenson's Awesome Website",
    description: 'an awesome site by Andy Stevenson',
    email: 'andystevenson@mac.com',
    company: 'andystevenson.dev',
    site: 'https://andystevenson.dev',
  },
}

const shortcodes = require('./shortcodes.cjs')
const filters = require('./filters.cjs')
const lodash = require('./lodash.cjs')

module.exports = function (eleventyConfig) {
  shortcodes(eleventyConfig)
  filters(eleventyConfig)
  lodash(eleventyConfig)

  // configure global data
  for (const fn in globalData) {
    eleventyConfig.addGlobalData(fn, globalData[fn])
  }

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
    },
  }
}
