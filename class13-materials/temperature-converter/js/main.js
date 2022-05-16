//Write your pseduo code first! 

//On click 
document.querySelector('#yell').addEventListener('click', run)
 


function run() {
  
  //Take a temperature 
  let pumpkin = document.querySelector('#firstName').value

//convert the temperature to degrees C, 
pumpkin = pumpkin * 9/5 + 32
//and show the result in the results box.
document.querySelector('#placeToYell').innerText = pumpkin
}
