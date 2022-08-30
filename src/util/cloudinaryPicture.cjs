const isCloudinary = require('./isCloudinary.cjs')
const cloudinarySrcset = require('./cloudinarySrcset.cjs')
const metaPicture = require('./metaPicture.cjs')

module.exports = async (src, alt, types, attributes) => {
  return metaPicture(
    src,
    alt,
    types,
    attributes,
    'cloudinary',
    isCloudinary,
    cloudinarySrcset,
  )
}
