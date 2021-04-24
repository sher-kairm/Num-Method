// Number.IsInteger()
/**
 * this method checks weather a number is integer or not. number with 0 is decimal point number.
 */
let num1 = 23.0;
let num2 = 2.4;
// console.log(Number.isInteger(num1))
// console.log(Number.isInteger(num2))

/**
 * The Number.isNaN method
 * this method checks weather a variable holds NaN value or not .
 * 
 * The global isNaN() function is used to check weather a value is number or not.
 */

let a = 'NaN';
let b = NaN;
let c = 'hello';
let d = 13;
console.log(Number.isNaN(a))
console.log(Number.isNaN(b))
console.log(Number.isNaN(c))
console.log(Number.isNaN(d))

console.log(isNaN(a))
console.log(isNaN(b))
console.log(isNaN(c))
console.log(isNaN(d))