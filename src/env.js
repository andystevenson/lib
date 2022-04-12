import dotenv from 'dotenv'
dotenv.config()

import debug from 'debug'
import logger from '@andystevenson/lib/logger'

const d = debug(process.env.APP || 'app')
const { log, critical } = logger()

export { d as debug, log, critical }

const noOp = () => {}
export default (fn = noOp) => {
  return fn(debug, log, critical)
}
