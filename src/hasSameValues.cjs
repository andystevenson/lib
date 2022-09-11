const { eq } = require('lodash')

function hasSameValues(a, b) {
  for (const key in a) {
    const equals = eq(a[key], b[key])
    if (!equals) return false
  }
  return true
}

module.exports = hasSameValues
