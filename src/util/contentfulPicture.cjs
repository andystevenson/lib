const isContentful = require('./isContentful.cjs')
const contentfulSrcset = require('./contentfulSrcset.cjs')
const metaPicture = require('./metaPicture.cjs')

module.exports = async (src, alt, types, attributes) => {
  return metaPicture(
    src,
    alt,
    types,
    attributes,
    'contentful',
    isContentful,
    contentfulSrcset,
  )
}
