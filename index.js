import { log, debug, critical, postcode, imagesize } from '@andystevenson/lib'
// log.info('hello world')
// const DEBUG = debug.extend('module')
// DEBUG('stuff occuring')
// critical.info('critical stuff happened')

// const p = await postcode('B91 1AH')
// log.info('%o', { p })

let size = await imagesize(
  'https://westwarwicks.club/west-warwicks-social-image.png',
)
log.info(size)
size = await imagesize('./_site/west-warwicks-social-image.jpeg')
log.info(size)
