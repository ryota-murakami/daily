var a = { bext: 'rel' }
var b = a
a = null
a = { bext: 'rel' }
console.log(a, b)
console.assert(a === b, true)

// {bext: 'rel'} {bext: 'rel'}
// 2023_Tue_Sep_19.js:5
// true
// 2023_Tue_Sep_19.js:6
// Assertion failed: true