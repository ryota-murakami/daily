function Dog(name) {
  this.name = name
}

const dog1 = new Dog('Gabby')

Dog.prototype.toString = function gogToString() {
  return `${this.name}`
}

console.log(dog1.toString())
