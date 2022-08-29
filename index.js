import {
  log,
  debug,
  critical,
  postcode,
  imagesize,
  mime,
  isUrl,
} from '@andystevenson/lib'

import path from 'node:path'
// log.info('hello world')
// const DEBUG = debug.extend('module')
// DEBUG('stuff occuring')
// critical.info('critical stuff happened')

// const p = await postcode('B91 1AH')
// log.info('%o', { p })

let file = './_site/west-warwicks-social-image.jpeg'
let size = await imagesize(
  'https://westwarwicks.club/west-warwicks-social-image.png',
)
log.info(size)
size = await imagesize(file)
log.info(size)

const extension = path.extname(file)
const type = mime.getType(extension)
console.log({ type })
const formalExtension = mime.getExtension(type)
console.log({ formalExtension })

console.log(isUrl(`http://example.com`))
console.log(isUrl(`bar`))
