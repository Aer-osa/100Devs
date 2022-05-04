document.querySelector('#check').addEventListener('click', check)

function formatting() {
  let date = this.value
  this.value = date.charAt(0).toUpperCase() + date.substring(1).toLowerCase();
}

let input = document.getElementById("date");
input.addEventListener('input', formatting)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
 if (day === "Tuesday" || day === "Thursday") {
  let paragraph = document.getElementById("placeToSee")
  let text = document.createTextNode("It\'s a class day")
  paragraph.appendChild(text)

 } else if (day === "Saturday" || day === "Sunday") {
  let paragraph = document.getElementById("placeToSee")
  let text = document.createTextNode("Its the freekin weekend")
  paragraph.appendChild(text)
 } else {
   let paragraph = document.getElementById("placeToSee")
   let text = document.createTextNode("BORINNNGGG!!!")
   paragraph.appendChild(text)

 }

}
