const util = require('node:util')
;(async () => {
  const { inspect, logger } = (await import('./src/main.js')).default
  inspect({ truth: 'programming is fun!' })
  console.log({ logger })
  const { log } = logger
  log.info('wtf', 'wtf!!')
  log.error('wtf', 'wtf!!')
  log.error(util.inspect({ a: 'hello', b: { x: 'bellow' } }))
  z = util.inspect({ a: 'hello', b: { x: 'bellow' } })
  log.info(z)
  log.info('weary')
  const c = log.getLogger('critical')
  c.info('what just happened')
})()
