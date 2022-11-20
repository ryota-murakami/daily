const obj = { a: 'fgt', b: 'gr', c: 'ftx' }

for (const [key, value] of Object.entries(obj)) {
  console.log({ key, value })
}
