const isUrl = require('is-url')
module.exports = (path) => {
  return isUrl(path) && process.env.CLOUDINARY
}
