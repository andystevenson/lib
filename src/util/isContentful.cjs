module.exports = (path) => {
  const assetPath = 'https://images.ctfassets.net/'
  // if it starts with "https://images.ctfassets.net/" we know it is a contentful asset
  if (typeof path === 'string') return path.startsWith(assetPath)
  if (typeof path === 'object') return path?.url?.startsWith(assetPath)
  return false
}
