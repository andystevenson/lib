const formatImgAttributes = require('./formatImgAttributes.cjs')
const srcset = require('./contentfulSrcset.cjs')

const contentfulImgFromObjectFromObject = async (src, alt, attributes) => {
  const { url, description, width, height } = src

  alt = alt ? alt : description
  const { format } = await formatImgAttributes(
    url,
    alt,
    width,
    height,
    srcset(url, 'webp'),
    attributes,
  )

  return format
}

const contentfulImgFromObject = async (src, alt, attributes) => {
  if (typeof src !== 'string')
    return contentfulImgFromObjectFromObject(src, alt, attributes)

  // default to webp because it has universal browser support
  const { format } = await formatImgAttributes(
    src,
    alt,
    null,
    null,
    srcset(src, 'webp'),
    attributes,
  )

  return format
}

module.exports = contentfulImgFromObject
