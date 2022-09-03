const permutate = require('just-permutations')

const permutateAll = (array, separator = '-') => {
  let sets = []

  // create set permutations of different sizes
  const length = array.length
  for (let i = array.length; i > 0; i = i - 1) {
    const sliceSize = i
    for (
      let end = length, start = end - sliceSize;
      start > -1;
      end = end - 1, start = end - sliceSize
    ) {
      const slice = array.slice(start, end)
      sets.push(slice)
    }
  }

  const permutations = sets.map((set) => permutate(set)).flat(1)

  const exhaustive = permutations.map((permutation) => ({
    permutation,
    name: permutation.join('-'),
  }))
  return exhaustive
}

module.exports = { permutate, permutateAll }
