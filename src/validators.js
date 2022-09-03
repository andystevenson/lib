const nameRegex =
  /^([a-z\u00C0-\u02AB'´`]{1,}\.?\s?)([a-z\u00C0-\u02AB'´`]?\.?\s?)+$/i

export function isValidName(name) {
  return nameRegex.test(name)
}

const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s*?\d[A-Z]{2}$/i

export function isValidPostcode(postcode) {
  return postcodeRegex.test(postcode)
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function isValidEmail(email) {
  return emailRegex.test(email)
}

const phoneRegex =
  /(?:(\(?(?:0(?:0|11)\)?[\s-]?\(?|\+?)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|\(?0)((?:\d{5}\)?[.\s-]?\d{4,5})|(?:\d{4}\)?[.\s-]?(?:\d{3}[.\s-]?\d{3}))|(?:\d{4}\)?[.\s-]?(?:\d{5}))|(?:\d{3}\)?[.\s-]?\d{3}[.\s-]?\d{3,4})|(?:\d{2}\)?[.\s-]?\d{4}[.\s-]?\d{4}))(?:[\s-]?((?:x|ext[.\s]*|#)\d{3,4})?)/

export function isValidPhoneNumber(phone) {
  return phoneRegex.test(phone)
}

export default {
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
  isValidPostcode,
}
