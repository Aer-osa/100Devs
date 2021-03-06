//Get the deck
let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('#Draw').addEventListener('click', newDraw)

function newDraw(){
  
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let val1 = Number(cardValue( data.cards[0].value ))
        let val2 = Number(cardValue( data.cards[1].value ))
        let val3 = Number(cardValue( data.cards[2].value ))
        let val4 = Number(cardValue( data.cards[3].value ))

        
        //
        // 
        // let val7 = Number(cardValue( data.cards[6].value ))
        // let val8 = Number(cardValue( data.cards[7].value ))
        document.querySelector('#player1c1').src = data.cards[0].image
        document.querySelector('#player1c2').src = data.cards[1].image
        
        document.querySelector('#player2c1').src = data.cards[2].image
        document.querySelector('#player2c2').src = data.cards[3].image
        
        // 
        // 
        // document.querySelector('#player2c3').src = data.cards[6].image
        // document.querySelector('#player2c4').src = data.cards[7].image
    
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('#Hit').addEventListener('click', nextCard)

function nextCard(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // let val5 = Number(cardValue( data.cards[4].value ))
        // let val6 = Number(cardValue( data.cards[5].value ))
        document.querySelector('#player1c3').src = data.cards[0].image
        
        document.querySelector('#player2c3').src = data.cards[1].image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function cardValue(val){
  if(val === "ACE"){
    return 14
  }else if (val === "KING"){
    return 13
  }else if(val === "QUEEN"){
    return 12
  }else if(val === "JACK"){
    return 11
  }else{
    return val
  }
}