import { log, debug, critical } from '@andystevenson/lib'
log.info('hello world')
const DEBUG = debug.extend('module')
DEBUG('stuff occuring')
critical.info('critical stuff happened')
