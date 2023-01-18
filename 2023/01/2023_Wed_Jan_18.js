function* root() {
  while (true) {
    yield 10
    yield 20
    yield 30
  }
}

const iterator = root()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)