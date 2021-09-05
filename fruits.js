const { json } = require('express');
const express = require('express')
const router = express.Router()

let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']


router.get('/', (req, res) => {
	console.log('GET /fruits ');
    res.send(JSON.stringify(fruits))})

router.get('/:index', (req, res) => {
	//  /fruits/3
	console.log('GET /fruits/:index');
	let index = req.params.index
	if( index >= 0 && index <= fruits.length ) {
		res.send(fruits[index] )
	} else {
		res.sendStatus(400)
	}
})


router.post('/', (req, res) => {
	console.log('POST /fruits ', req.body);
	// TODO: felhantering, kontrollera att req.body är ett rimligt objekt
	let fruit = req.body.fruit
	fruits.push(fruit)
	res.sendStatus(200)
})

router.put('/:index', (req, res) => {
    let index = req.params.index

    if( index >= 0 && index <= fruits.length ) {
        fruits[index] = req.body
        res.sendStatus(200)	}
    else {
        res.sendStatus(404)
    }
})

router.delete('/:index', (req, res) => {
    let index = req.params.index

    if( index >= 0 && index <= fruits.length ) {
        
    fruits.splice(index, 1);

  res.sendStatus(200)	}
    else {
        res.sendStatus(404)
    }
})

module.exports = router