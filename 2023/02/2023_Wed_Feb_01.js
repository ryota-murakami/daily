const arrObj = [
  'fff',
  { dex: [{ a: 0, b: 0 }] },
  [['aaa', 'bbb']],
  'rrr',
  [2, 3, 4],
]

const res = arrObj.flatMap((item) => {
  return item
})

console.log(JSON.stringify(res, null, 2))
