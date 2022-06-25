import * as assert from 'node:assert/strict'

const RE_MATCHALL_EOL = /(\r?\n)|$/g

function splitLinesWithEols(str) {
  const lines = []
  let prevAfterEol = 0
  for (const matchObj of str.matchAll(RE_MATCHALL_EOL)) {
    const afterEol = matchObj.index + matchObj[0].length
    lines.push(str.slice(prevAfterEol, afterEol))
    prevAfterEol = afterEol

    return lines
  }
}

assert.deepEqual(splitLinesWithEols('ther\nare\r\nmultipl\nlines'), [
  'ther\n',
  'are\r\n',
  'multipl\n',
  'lines',
])
