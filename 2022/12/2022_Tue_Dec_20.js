const module = {
  getX: function () {
    return this.x
  },
  x: 42,
}

const unboundGetX = module.getX
console.log(unboundGetX()) // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module)
console.log(boundGetX())
// expected output: 42
