// @TODO gen random string
function getRandomAlphabet() {
  const Alphabet = 'abcdefghijklmnopqrstuvwcyz'
  const num = Math.floor(Math.random() * 26)

  return Alphabet.at(num)
}

console.log(getRandomAlphabet())
