// I am not 100% sure this is bulletproof ... I looked it up and this was how it is supposedly
// tested!
const isAsync = (fn) => fn.constructor.name === 'AsyncFunction'

module.exports = isAsync
