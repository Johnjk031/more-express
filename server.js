const express = require('express')
const app = express()
const PORT = 1337
const getGuests = require('./guestbook.js')
const getFruits = require('./fruits.js')
const getBooks = require('./books.js')


app.use(express.static('public'));
app.use(express.json())

// let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']



/*
app.get('/fruits/:id', function (req, res) {
  if(req.params.id > fruits.length) {
     res.sendStatus(404)
  }
  else {
   res.send(fruits[req.params.id])
  }
})



let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']

app.get('/fruits', function (req, res) {
   res.send(fruits.toString());
})



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
 })


 app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + '/public/style.css');
 })

 app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + '/public/script.js');
 })
*/

// var visitor = 0
 // app.get('/guestbook', function (req, res) {
 //   visitor++
 //   res.send('du är besökare:' + visitor );
 //  })
 
 app.listen(PORT, function () {    
    console.log("server is running on localhost:" + PORT)
 })


 app.get('/guestbook', getGuests)
 app.use('/fruits', getFruits)
 app.use('/books', getBooks)