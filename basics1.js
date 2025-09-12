// string data type for string of characters
// wrapped in single or double quotes
'Hello, world!'

// to print this out on the console,
// we use the console 'class', and access a method
// called 'log', within that class
console.log()
// empty line output cuz we didn't pass in any arguments

console.log('Hello, world!')

// say, you want to print a quotation mark or apostrophe
// just use the opposite to wrap the string. like:
console.log('He said, "I am hungry".')

// we can also print out numbers, etc
console.log(4 + 5)
// here, evaluation happens before the execution

// using variables
// = is an assignment operator
sentence = 'yo, wassup'
how_many_biscuits = 4
// no spaces in variable names, can't start with numbers
// use snakecase, like how_many_biscuits or howmanybiscuits
// use camelCase, like howManyBiscuits

console.log(sentence)

// BUT you should initialise your variables
// using 3 keywords - var, let, const
// const for variables whose values are never going to change
// don't initialise twice, obv
const smth = 'too many biscuits'
let biscuits = 2
biscuits = 6
console.log(smth)
console.log(biscuits)

// just like in C, you don't have to put a value immediately
// you can just declare your variables
let idk
idk = 'what?'
console.log(idk)

// can directly assign values of variables to other variables
let snacks = biscuits
// this assigns the value of biscuits when we first assign it
// doesn't constantly track it tho

// null
// null is a special keyword where it means the absence of a value

// undefined
// similar. absence of a value, not because it hasn't been assigned
// but because maybe it's itention to leave it blank

// boolean
// true & false
