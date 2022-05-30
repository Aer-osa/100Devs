//Example fetch using openlibrary.org
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h3').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(!localStorage.getItem('books')){
          localStorage.setItem('books',data.title)
        }else{
          let books = localStorage.getItem('books') + " ; " + data.title
          localStorage.setItem('books', books)
        }
      //   let books = localStorage.getItem('books') + " ; " + data.title
      // //Set item books into local storage
      //   localStorage.setItem('books', books)
      // //Place the item into the DOM
        document.querySelector('h3').innerText = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// 9780385664226
//9780140328721
