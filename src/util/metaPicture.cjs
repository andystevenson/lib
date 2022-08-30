const stripSizesAttribute = require('./stripSizesAttribute.cjs')
const formatImgAttributes = require('./formatImgAttributes.cjs')
const { stripIndent } = require('common-tags')
const uniq = require('lodash/uniq')
const sort = require('lodash/sortBy')
const identity = require('lodash/identity')
const mime = require('mime/lite')

const generateSources = (src, types, sizes, srcsetProducer) => {
  sizes = sizes ? sizes : 'sizes="96vw"' // pretty much full width picture

  return types
    .map((type) => {
      const ext = mime.getExtension(type)
      const srcset = srcsetProducer(src, ext)
      return `<source type="${type}" srcset="${srcset}" ${sizes}>`
    })
    .join('\n')
}

const metaPicture = async (
  src,
  alt,
  types,
  attributes,
  resource,
  isChecker,
  srcsetProducer,
) => {
  if (!isChecker(src))
    throw Error(`${src} cannot be processed as a ${resource} image`)

  const { sizes, final } = stripSizesAttribute(attributes)

  // default to webp for now as it has universal support in browsers
  const allTypes = types
    ? sort(uniq(['image/webp', ...types]), identity)
    : ['image/webp']

  const sources = generateSources(src, allTypes, sizes, srcsetProducer)

  const { format: img } = await formatImgAttributes(
    src,
    alt,
    null,
    null,
    null,
    [],
  )

  const formattedAttributes = final.length ? ` ${final.join(' ')}` : ''
  return stripIndent`<picture${formattedAttributes}>
    ${sources}
    ${img}
  </picture$>`
}

module.exports = metaPicture
