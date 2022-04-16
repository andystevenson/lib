import { log, debug, critical, postcode } from '@andystevenson/lib'
log.info('hello world')
const DEBUG = debug.extend('module')
DEBUG('stuff occuring')
critical.info('critical stuff happened')

const p = await postcode('B91 1AH')
log.info('%o', { p })
