const isContentful = require('../util/isContentful.cjs')
const isCloudinary = require('../util/isCloudinary.cjs')
const formatImgAttributes = require('../util/formatImgAttributes.cjs')
const contentfulImg = require('../util/contentfulImg.cjs')
const cloudinaryImg = require('../util/cloudinaryImg.cjs')

module.exports = async (...attributes) => {
  let [src, alt] = attributes

  if (isContentful(src)) return contentfulImg(src, alt, attributes)
  if (isCloudinary(src)) return cloudinaryImg(src, alt, attributes)

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
