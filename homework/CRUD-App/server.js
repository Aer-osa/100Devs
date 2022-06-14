const MongoClient = require('mongodb').MongoClient
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const connectionString = 'mongodb+srv://cheese:5kKDbcDwkWYEmkMn@cluster0.bygje.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('waynesworld-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.get('/', (req, res) => {
    
        quotesCollection.find().toArray()
            .then(results =>{
                console.log(results)
                res.render('index.ejs', {quotes: results})
            })
            .catch(error => console.error(error))
        
    })
 
    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            console.log(result)
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })
    app.listen(3000, function(){
        console.log('listening on 3000')
    }) 
  })
  .catch(error => console.error(error))


  