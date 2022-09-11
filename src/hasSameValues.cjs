const { eq } = require('lodash')
const { inspect } = require('node:util')
const options = { depth: null, colors: true }

function hasSameValues(a, b, verbose = false) {
  for (const key in a) {
    const equals = eq(a[key], b[key])
    if (!equals) {
      if (verbose) {
        const valueA = a[key]
        const typeA = typeof valueA
        const displayA = inspect(valueA, options)
        const valueB = b[key]
        const typeB = typeof valueB
        const displayB = inspect(valueB, options)
        const error = `key ${key} not equal [${typeA},${displayA}] != [${typeB},${displayB}]`
        console.error(error)
      }
      return false
    }
  }
  return true
}

module.exports = hasSameValues
