// *Variables*
// Create a variable and console log the value
let num1 = 2
console.log(num1)
// Create a variable, add 10 to it, and alert the value
let num2 = num1 + 10
alert (num2)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(num1,num2,num3,num4) {
alert(num1 - num2 - num3 - num4)
}
subtractFourNumbers(30,2,4,5)
// Create a function that divides one number by another and returns the remainder
function divideOneNumber(num1,num2){
return num1 % num2
}
divideOneNumber(50,7)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoJumanji(num1,num2){
let sum = num1 + num2
    if(sum >= 50){
    alert('Jumanji')
} else{
    alert(sum)
}
}
addTwoJumanji(25,26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divisibleZebra(num1,num2,num3){
    let sum = num1 * num2 * num3
    if(sum % 3 == 0){
        alert('ZEBRA')
    } else {
        alert('Fuck off')
    }

}
divisibleZebra(2,5,2)