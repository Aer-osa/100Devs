// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = 'Cheese Toastie'
favoriteFood = 'dominos'
alert(favoriteFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let assignString = 'Cheese'
alert(assignString.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takeThreeNumbers(n1,n2,n3) {
    alert((n1 / n2) * n3)
}
takeThreeNumbers(2,6,8)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
    function cubeRoot(n1){
       alert(Math.cbrt(n1))
    }
cubeRoot(8)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function takeAMonth(month){
    let monthLowerCase = month.monthLowerCase()
    if(monthLowerCase === 'June' || monthLowerCase === 'July' || monthLowerCase === 'August'){
        alert( "YAY" )
    }else{
        alert("BOOO")
    }
}
takeAMonth('September')
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipMultipleOfFive(num){
    for(let i = 1; i <= num; i++){
        if(i % 5 !== 0){
            console.log(i)
        }
        
    }
}