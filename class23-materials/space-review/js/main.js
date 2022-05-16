//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const sum = [10, 20, 30, 40].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); 
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let nums = [10,15,30]

let newArr = nums => nums.map ( num => num**2 )


//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log(str.split("").reverse().join(""))

unoReverse('abcdefghijklmnopqrstuvwxyz')
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => alert( str === str.split('').reverse().join(''))

palindromeCheck('reverse')