//Create a button that adds 1 to a botScore stored in localStorage 
localStorage.setItem('botScore', 0 )

document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    let botScoreVal; = localStorage.getItem('botScore')
    botScoreVal += 1
    localStorage.setItem('botScore',, botScoreVal)
}

