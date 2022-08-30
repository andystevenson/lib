const stripSizesAttribute = (attributes) => {
  let sizes = attributes.find((attribute) => attribute.startsWith('sizes='))
  const final = attributes.filter(
    (attribute) => !attribute.startsWith('sizes='),
  )
  return { sizes, final }
}

module.exports = stripSizesAttribute
