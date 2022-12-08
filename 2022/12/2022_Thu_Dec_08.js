const obj = { a: 20 }

Object.freeze(obj)

obj.a = 30

console.log(obj)
