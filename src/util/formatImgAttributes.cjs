const attributesPresent = require('./attributesPresent.cjs')

const formatAttributes = async (
  src,
  alt,
  width,
  height,
  srcset,
  attributes,
) => {
  const present = attributesPresent(attributes)

  let format = `<img`

  // start with src attribute

  const includesSrc = present.includes('src')
  format = includesSrc ? format : `${format} src="${src}"`

  // keep the remainder of the attributes ready
  const remainder = attributes.slice(alt ? 2 : 1)

  // process the alt attribute
  const includesAlt = present.includes('alt')
  if (!includesAlt) {
    alt = alt ? alt : `image from ${src}`
    format = `${format} alt="${alt}"`
  }

  // lets process width and height
  const includesWidthAndHeight =
    present.includes('width') && present.includes('height')

  if (!includesWidthAndHeight) {
    // we need to determine width and height
    if (!width || !height) {
      // nothing was passed to us so we need to read the width and height off the image
      const imagesize = (await import('@andystevenson/lib/imagesize')).default
      const size = await imagesize(src)

      width = size.width
      const includesWidth = present.includes('width')
      format = includesWidth ? format : `${format} width="${width}"`

      height = size.height
      const includesHeight = present.includes('height')
      format = includesHeight ? format : `${format} height="${height}"`
    }
  }

  // process srcset
  const includesSrcset = present.includes('srcset')
  if (!includesSrcset) {
    format = srcset ? `${format} srcset="${srcset}"` : format
  }

  format = remainder.length ? `${format} ${remainder.join(' ')}>` : `${format}>`

  return { format, alt, width, height, srcset, remainder }
}

module.exports = formatAttributes
