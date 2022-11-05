const obj = { a: 'fgt', b: 'gr', c: 'ftx' }

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key])
})

console.log('\n')

var user = {
  age: 25,
  name: 'John',
}
for (const property in user) {
  console.log(`user[${property}] = ${user[property]}`)
}

console.log('\n')

const xusers = {
  age: 30,
  gender: 'male',
  name: 'steven',
}
// {
//   age: 20,
//   gender: 'male',
//   name: 'lex',
// },

// const entries = Object.entries(xusers)

for (const obj in xusers) {
  console.log(xusers[obj])
}
