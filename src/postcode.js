import Client from 'getaddress-api'
import { isValidPostcode } from './validators.js'
import { log, critical } from './env.js'
import 'isomorphic-fetch' // needed for node before '--experimental-fetch

let apiKey = process.env.GETADDRESS_IO_API_KEY
if (!apiKey) {
  critical.error(`getAddress.io API key not set`)
  process.exit(1)
}

const cleanPostcode = (string) => string.replaceAll(/\s/g, '')

export default async function (string) {
  let postcode = cleanPostcode(string)
  const isValid = isValidPostcode(postcode)
  log.info('async getAddress called....', postcode, isValid)

  try {
    const api = new Client(apiKey)

    const findResult = await api.find(postcode)
    if (findResult.isSuccess) {
      const success = findResult.toSuccess()
      log.debug('%o', { success })
      return success.addresses
    } else {
      const failed = findResult.toFailed()
      log.debug('%o', { failed })
      return failed
    }
  } catch (error) {
    log.debug('%o', { error })
    throw `getAddress.io postcode failed [${error.message}]`
  }
}
