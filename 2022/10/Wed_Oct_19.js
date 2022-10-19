let myArray = [1, 2, [3,4]]
let flatAarray = myArray.flat()
myArray = myArray.flat()

let text1 = 'flatArray: '
let text2 = 'myArray: '


for(let i=0;i < 11;i++) {
    console.log(text1, flatAarray, text2, myArray)
}
