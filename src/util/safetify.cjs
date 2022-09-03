const nunjucks = require('nunjucks')

const environment = nunjucks.configure()
const safe = environment.filters.safe

const safetify = (fn) =>
  function (...args) {
    return safe(fn(...args))
  }

module.exports = safetify
