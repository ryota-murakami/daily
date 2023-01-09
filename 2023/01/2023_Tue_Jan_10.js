const object1 = {}

Object.defineProperty(object1, 'property1', { value: 42, writable: false })

object1.property1 = 77

console.log(object1.property1)

const obj2 = {}

obj2.p1 = 10

console.log(obj2)
