// return a srcset attribute from the openProps breakpoints

const props = require('./openProps.cjs')

const CLOUDINARY = process.env.CLOUDINARY
const fetch = `https://res.cloudinary.com/${CLOUDINARY}/image/fetch/c_scale,q_auto,f_auto`
const fetchFormatTo = `https://res.cloudinary.com/${CLOUDINARY}/image/fetch/c_scale,q_auto`

module.exports = (src, type = null) => {
  if (type)
    return props.breakpoints
      .slice(3)
      .map((bp) => `${fetchFormatTo},w_${bp},f_${type}/${src} ${bp}w`)
      .join(',\n')

  return props.breakpoints
    .slice(3)
    .map((bp) => `${fetch},w_${bp}/${src} ${bp}w`)
    .join(',\n')
}
