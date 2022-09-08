const { inspect } = require('node:util')
const log = require('loglevel')
const chalk = require('chalk')

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.green,
  WARN: chalk.yellow,
  ERROR: chalk.red,
}

const verbose = false
const configure = (options = { verbose, colors }) => {
  const original = log.methodFactory
  log.methodFactory = function (method, level, name) {
    var raw = original(method, level, name)

    return function () {
      const messages = []

      const m = method.toUpperCase()
      const color = options.colors ? options.colors[m] : colors[m]

      if (options.verbose) {
        const now = new Date()
        const ms = `${now.getMilliseconds()}`.padStart(3, '0')
        const time = now.toLocaleTimeString()
        const l = color(m)
        const formatted = `[${time}.${ms}] ${l}`
        messages.push(formatted)
      }
      const n = name ? `(${color(name)})` : ''
      n && messages.push(n)
      options.verbose && messages.push(':')

      for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i]
        messages.push(color(arg))
      }
      raw.apply(undefined, messages)
    }
  }

  process.env.DEBUG ? log.setLevel('TRACE') : log.setLevel('INFO')

  return { log }
}

module.exports = configure()
module.exports.configure = configure
