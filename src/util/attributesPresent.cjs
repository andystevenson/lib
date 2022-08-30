const name = /[\w\-]+/
const attributesPresent = (attributes) =>
  attributes
    .filter((attribute) => attribute.match(name))
    .map((attribute) => attribute.match(name)[0])

module.exports = attributesPresent
