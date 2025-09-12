// Objects in JS are basically dictionaries of key-value pairs
// wrapped in {}, ways to store/organize data

sentence = 'not enough'

let janta = {
    nobody: 'is perfect',
    somebody: 'doesn\'t wanna be',
    // the backslash will make you "escape" the apostrophe!
    baskets: 2,
    candies: sentence
}

console.log(janta)

// arrays - list of items
// use square parentheses
let array = [1, 3, 16]

console.log(array)
// zeroeth indexing system, obv

function exampleFxn() {
    // output value of is_true
    console.log(array)
}
// calling the fxn, using the circular parentheses ()
exampleFxn()

// funny thing
// console.log(console)
// this displays how our console is just an object
// within which we have log, which is a function

console.log(exampleFxn)
// will make JS tell us that exampleFxn is a function...

function multiplyTwo(value, secondValue) {
    console.log(value * secondValue)
}

multiplyTwo(16, 8)

function compareTwo(value, secondValue) {
    console.log(value == secondValue)
}
// == is soft-equals. can determine similarity between,
// say, two numbers but one has string data type, i.e., '6' == 6
// will lead to 'true'
// === is strict/hard equality, and it is mindful of data types
// != is not equal

compareTwo(4, 5)
compareTwo(6, 6)

console.log()

// Logical Operators:
// && AND  || OR  ! NOT

let condition1 = true
let condition2 = false

console.log(condition1 && condition2)

console.log(!condition2)

// typeof
console.log(typeof multiplyTwo)
console.log(typeof array) // JS understand array as an object