const path = require('path')
const uniq = require('lodash/uniq')
const mime = require('mime/lite')

const isContentful = require('../util/isContentful.cjs')
const isCloudinary = require('../util/isCloudinary.cjs')

const contentfulPicture = require('../util/contentfulPicture.cjs')
const cloudinaryPicture = require('../util/cloudinaryPicture.cjs')

const formatImgAttributes = require('../util/formatImgAttributes.cjs')

const { stripIndent } = require('common-tags')

async function picture(src, alt, types, ...attributes) {
  if (isContentful(src))
    return await contentfulPicture(src, alt, types, attributes)
  if (isCloudinary(src))
    return await cloudinaryPicture(src, alt, types, attributes)

  // we cannot do much here because we cannot transform the src image
  const { format: imgFormat } = await formatImgAttributes(
    src,
    alt,
    null,
    null,
    null,
    [],
  )

  const attributesFormat = attributes.length ? ` ${attributes.join(' ')}` : ''
  return stripIndent`
  <picture${attributesFormat}>
    ${imgFormat}
  </picture>`
}

module.exports = picture
