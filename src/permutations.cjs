const permutate = require('just-permutations')

const tuples = (set, size) => {
  const chunks = []
  const { length } = set
  for (let start = 0; start < length; start = start + 1) {
    let chunk = [set[start]]
    // if (chunk.length === size) console.log(chunk)
    if (chunk.length === size) chunks.push(chunk)
    if (chunk.length < size) {
      let rest = set.slice(start + 1)
      // console.log({ rest }, rest.length >= size - 1)
      while (rest.length >= size - 1) {
        let piece = rest.slice(0, size - 1)
        // console.log({ piece })
        chunk = chunk.concat(piece)
        // console.log(chunk)
        chunks.push(chunk)

        rest = rest.slice(1)
        chunk = [set[start]]
      }
    }
  }
  // console.log(chunks)
  return chunks
}

const permutateAll = (array, separator = '-') => {
  let sets = []

  // create set permutations of different sizes
  const length = array.length
  for (let i = length; i > 0; i = i - 1) {
    sets.push(tuples(array, i))
  }

  let permutations = sets.flat(1).map((set) => {
    const p = permutate(set)
    // console.log({ p })
    return p
  })

  permutations = permutations.flat(1)
  // console.log({ permutations })
  const all = permutations.map((permutation) => ({
    permutation,
    name: permutation.join(separator),
  }))
  // console.log({ all })

  return all
}

// const set = [1, 2, 3, 4, 5]
// console.log(tuples(set, 1))
// console.log(tuples(set, 2))
// console.log(tuples(set, 3))
// console.log(tuples(set, 4))
// console.log(tuples(set, 5))
// permutateAll(set)
module.exports = { permutate, permutateAll, tuples }
