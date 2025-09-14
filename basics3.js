// conditional statements

let condition1 = true
let condition2 = false

if (condition1 && true) {
    console.log('if block')
} else if (condition2) {
    console.log('the first else if block')
} else {
    console.log('else block')
}

// loops

let array = [1, 2, 4, 6, 7, 19]
let i = 0
let length = array.length
while (i < length) {
    console.log('value at ', i, ' = ', array[i])
    i++
}

// break and continue work here too, same use