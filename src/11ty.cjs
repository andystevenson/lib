const env = require('./env')
const build = require('./src/build')
const meta = require('./src/meta')
const globalData = {
  env: process.env,
  build: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  meta: {
    title: 'My Site',
    description: 'My site is awesome.',
    company: 'andystevenson.dev',
    site: 'https://andystevenson.dev',
  },
}

const shortcodes = require('./shortcodes.cjs')
const filters = require('./filters.cjs')

module.exports = function (eleventyConfig) {
  shortcodes(eleventyConfig)
  filters(eleventyConfig)

  // eleventyConfig.addPassthroughCopy('public')
  eleventyConfig.addWatchTarget('./src/sass')
  eleventyConfig.addWatchTarget('./public')

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
