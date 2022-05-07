//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let arr = [1, 2, 3];
function multiplyAndAlert(arr){
    let product = 1
    //arr.forEach(num => product *= num)
    for(let i = 0; i < arr.length; i++){
        product *= arr[i]
    }
    alert(product)

}
multiplyAndAlert([10, 2, 3])