;(async () => {
  const { inspect } = (await import('./src/main.js')).default
  inspect({ truth: 'programming is fun!' })
})()
