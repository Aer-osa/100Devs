document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h4').innerText
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}