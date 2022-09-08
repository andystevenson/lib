const util = require('node:util')
;(async () => {
  const { inspect, logger } = (await import('./src/main.js')).default
  inspect({ truth: 'programming is fun!' })
  console.log({ logger })
  const { log } = logger
  log.info('wtf', 'wtf!!')
  log.error('wtf', 'wtf!!')
  log.error({ a: 'hello', b: { x: 'first' } })
  z = util.inspect(
    { a: 'hello', b: { x: 'bellow' } },
    { depth: null, colors: true },
  )
  log.error('error', z)
  console.log('information', z)
  log.info('weary')
  const c = log.getLogger('critical')
  log.info(1)
  log.info(Number(2))
  log.info(String(2))
  log.error(String(2))
  log.error(String(3))
  c.info('what just happened')
})()
