// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let butts = "Is there anybody out there?"
if(butts.includes('?', 0)){
    alert('Its a question!')
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let cheese = "Hi there jr. dev how are you today? I am a jr. dev"
let cheeseresult = cheese.replaceAll("jr. dev", "software engineer")
alert(cheeseresult)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random = Math.random()
    if( random < .33){
        return 'rock'
    }else if( random < .66){
        return 'scissors'
    }else {
        return 'paper'
    }

}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){
    let botChoice = rockPaperScissors()
    if( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'scissors' && botChoice === 'paper') ||
    (playerChoice === 'paper' && botChoice === 'rock')){
        console.log('WINNNRARRR')
    }else if ( playerChoice === botChoice){
        console.log('TIE')
    }else{
        console.log('YOU LOSSSEEEE')
    }
}
checkWin('paper')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
