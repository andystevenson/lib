const { inspect } = require('node:util')

module.exports = (...args) => {
  args.forEach((arg) => console.log(inspect(arg, false, null, true)))
  return ''
}
