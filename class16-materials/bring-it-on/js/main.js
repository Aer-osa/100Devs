// *Variables*
// Create a variable and console log the value
let variable = 'hat'
console.log(variable)
// Create a variable, add 10 to it, and alert the value
let butts = 100
butts = butts + 10
alert(butts)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers (num1,num2,num3,num4){
    alert(num1 - num2 - num3 - num4)
}
subtractFourNumbers(30,4,2,7)
// Create a function that divides one number by another and returns the remainder
function dividesAndReturns (num1,num2) {
    return num1 % num2
}
console.log(dividesAndReturns(30,4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(n1,n2){
    if(n1 + n2 > 50){
        alert('Jumanji')
    }
}
addTwoAlertJumanji(50,10)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumsZebra(n1,n2,n3){
    let product = n1 * n2 * n3
    if (product % 3 === 0){
        alert('ZEBRA')
    }
}
multiplyThreeNumsZebra(3,3,7)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(word, number){
    for(let i = 1; i <= number; i++){
        console.log(word)
    }

}
wordAndNumber('amazing', 30)