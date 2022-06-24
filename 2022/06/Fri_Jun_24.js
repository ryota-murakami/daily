const { performance } = require('perf_hooks')

const doSomeLongRunningProcess = (cb) => setTimeout(cb, 1000)

performance.mark('A')
doSomeLongRunningProcess(() => {
  console.log(performance.measure('A to Now', 'A'))
})
