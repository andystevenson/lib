const defaultConfig = require('./src/11ty.cjs')

console.log('loading 11ty config...')

module.exports = (eleventyConfig) => {
  const config = defaultConfig(eleventyConfig)
  return config
}
