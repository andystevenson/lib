const util = require('node:util')
const _ = require('lodash')
const iterate = require('iterate-iterator')
const iterator = require('es-get-iterator')
const tags = require('./html-tags.cjs')
const prettier = require('prettier')

const stringify = (arg, separator = ' ', objectAsAttributes = false) => {
  switch (typeof arg) {
    case 'string':
    case 'boolean':
    case 'number':
      return arg.toString()
    case 'bigint':
      return arg.toString()
    case 'symbol':
    case 'undefined':
      return ''
    case 'function':
      return stringify(arg(), separator, objectAsAttributes)
    case 'object': {
      if (arg instanceof String) {
        return arg.valueOf()
      }

      if (arg instanceof Boolean) {
        return arg.toString()
      }
      if (arg instanceof Number) {
        return arg.toString()
      }
      if (_.isNil(arg)) {
        return ''
      }

      const iterable = iterator(arg)

      // it's a plain object...
      if (!iterable) {
        if (!objectAsAttributes) return arg.toString()

        const format = Object.entries(arg)
          .filter(([key]) => key !== '__keywords')
          .map(([key, value]) => {
            const keyString = stringify(key, separator, objectAsAttributes)
            let valueString = stringify(value, separator, objectAsAttributes)

            valueString = valueString.includes('"')
              ? `'${valueString}'`
              : `"${valueString}"`

            return `${keyString}=${valueString}`
          })
          .join(separator)
        return format
      }

      // okay we have something iterable...
      // stringify each element, then concatenate the response
      const array = iterate(iterable)
      const transform = array.map((item) =>
        stringify(item, separator, objectAsAttributes),
      )
      return transform.join(separator)
    }

    default:
      throw TypeError(`unexpected arg ${arg}`)
  }
}

const htmlAttributes = (attributes) => {
  return stringify(attributes, ' ', true)
}

const innerHTML = (arg) => {
  return stringify(arg, undefined, true)
}

const hof = (element) => {
  return function (...attributes) {
    const { name, closes, closing } = element

    if (closes) {
      // we expect what is passed to us as the first argument ultimately yields innerHTML
      const value = innerHTML(attributes[0])

      // the remainder of the attributes (class="xyz" etc) are to be annotated on the element
      let format = htmlAttributes(attributes.slice(1))
      format = format ? ` ${format}` : ''
      const html = `<${name}${format}>${value}</${name}>`

      try {
        return prettier.format(html, { parser: 'html' })
      } catch (error) {
        console.error(`SyntaxError: ${error.message}`)
        const htmlInError = util.inspect(html, false, null, true)
        console.error(`check for mismatched quotes in [${htmlInError}]`)
        return html
      }
    }

    // self closing html tag
    let format = htmlAttributes(attributes)
    format = format ? ` ${format}` : ''
    const closeWith = closing ? closing : ''
    return `<${name}${format}${closeWith}>`
  }
}

// build all the shortcodes
const shortcodes = {}

tags.forEach((tag) => {
  let { name, snippet } = tag
  snippet ? (shortcodes[snippet] = hof(tag)) : (shortcodes[name] = hof(tag))
})

// build a nunjucks.json snippets file
const snippets = tags.reduce((all, tag) => {
  const { name, snippet } = tag
  all[name] = {
    prefix: [snippet ? snippet : `n${name}`],
    body: [`{% ${snippet ? snippet : name} '$0' %}`],
    description: `${name} for nunjucks`,
  }
  return all
}, {})

module.exports = { shortcodes, snippets }
