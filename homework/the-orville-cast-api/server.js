const express = require('express')
const app = express()
const PORT = 8000

const crew = {
    'captain mercer':{
        'age': 48,
        'crewName':'Captain Mercer',
        'birthName': 'Seth MacFarlane',
        'birthLocation': 'Kent, Connecticut, United States'    
    },
    'commander grayson':{
        'age': 39,
        'crewName':'Commander Grayson',
        'birthName': 'Adrianne Lee Palick',
        'birthLocation': 'Toledo, Ohio, U.S.'    
    },
    'yaphit':{
        'age': 61,
        'crewName':'Yaphit',
        'birthName': 'Norman Gene Macdonald',
        'birthLocation': 'Quebec City, Quebec, Canada'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:crewName', (request, response)=>{
    const crewsName = request.params.crewName.toLowerCase()
    if(crew[crewsName]){
        response.json(crew[crewsName])
    }else{
        response.json(crew['yaphit'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}... better go catch it!`)
})