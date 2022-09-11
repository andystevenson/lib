const util = require('node:util')
;(async () => {
  const hasSameValues = require('@andystevenson/lib/hasSameValues')
  console.log(hasSameValues({ a: 1, b: 2 }, { a: 1, b: 2 }))
  console.log(hasSameValues({ a: 1, b: 2 }, { a: 1, b: '3' }))
})()
