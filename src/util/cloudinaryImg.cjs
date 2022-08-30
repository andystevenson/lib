const formatImgAttributes = require('./formatImgAttributes.cjs')
const isUrl = require('is-url')
const srcset = require('./cloudinarySrcset.cjs')

const CLOUDINARY = process.env.CLOUDINARY

const cloudinaryImage = async (src, alt, attributes) => {
  if (!CLOUDINARY) throw Error(`CLOUDINARY environment needs to be set`)

  // okay the asset is on the cloud, we can use cloudinary to transform it
  if (isUrl(src)) {
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

  const { format } = await formatImgAttributes(
    src,
    alt,
    null,
    null,
    null,
    attributes,
  )

  return format
}

module.exports = cloudinaryImage
