//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let arrTv = ['Supernatural','American Dad','The Simpsons','Ugly Betty']
// for(let i = 0; i < arrTv.length; i++){
//     console.log(arrTv[i])
// }
arrTv.forEach( show => console.log(show) )
//Create and array of numbers
let arrNums = [1,2,3,4]
//Return a new array of numbers that includes every even number from the previous Arrays

let onlyEvens = arr => arr.filter( n => n % 2 === 0 )

console.log(onlyEvens( arrNums ))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondLowestSecondHighest(arr) {
    let sorted = arr.sort( (a,b)=> a-b )
    alert( sorted[1] + sorted[sorted.length-2])
}
secondLowestSecondHighest([2,3,4,1,5])