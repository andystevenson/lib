import log from 'loglevel'
import prefix from 'loglevel-plugin-prefix'
import chalk from 'chalk'

export const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
}

export default (newColors = colors) => {
  prefix.reg(log)
  log.enableAll()

  prefix.apply(log, {
    nameFormatter(name) {
      return name ? name : ''
    },
    timestampFormatter: function (date) {
      const hhmmss = date.toLocaleTimeString()
      const ms = String(date.getMilliseconds()).padStart(3, '0')
      return `${hhmmss}.${ms}`
    },
    format(level, name, timestamp) {
      const color = newColors[level.toUpperCase()]
      const t = color(`[${timestamp}]`)
      const l = color(level)
      const n = chalk.green(`${name}:`)
      return name ? `${t} ${l} (${n})` : `${t} ${l}:`
    },
  })

  const critical = log.getLogger('critical')
  prefix.apply(critical, {
    format(level, name, timestamp) {
      return chalk.red.bold(`[${timestamp}] ${level}(${name}):`)
    },
  })

  process.env.DEBUG ? log.setLevel('TRACE') : log.setLevel('INFO')

  return { log, critical }
}
