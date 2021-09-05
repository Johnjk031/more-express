const { json } = require('express');
const express = require('express')
const router = express.Router()
const app = express()




let books = [
    { "title": "On the road", "author": "Jack Keruac" },
    { "title": "Harry Potter", "author": "JK Rowling" },
    { "title": "One Flew Over the Cuckoo's Nest", "author": "Ken Kesey" },
    { "title": "Lord of the flies", "author": "William Golding" }

]

router.get('/', (req, res) => {
    console.log('GET /fruits ');
    res.send(JSON.stringify(books))
})

router.get('/wished-books', (req, res) => {
    let query = req.query
    res.send(JSON.stringify(query))
})


router.post('/', (req, res) => {
    console.log('POST /fruits ', req.body);
    // TODO: felhantering, kontrollera att req.body är ett rimligt objekt
    let book = req.body
    books.push(book)
    res.sendStatus(200)
})

router.put('/:index', (req, res) => {
    let index = req.params.index

    if( index >= 0 && index <= books.length ) {
        books[index] = req.body
        res.sendStatus(200)	}
    else {
        res.sendStatus(404)
    }
})

router.delete('/:index', (req, res) => {
    let index = req.params.index

    if( index >= 0 && index <= books.length ) {
        
    books.splice(index, 1);

  res.sendStatus(200)	}
    else {
        res.sendStatus(404)
    }
})

module.exports = router