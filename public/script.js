console.log('hello world')

let btn = document.querySelector('#btn')
let innerText = document.querySelector('#innertext')
let guestbook = document.querySelector('#guesttext')

btn.addEventListener('click', () => {
    console.log('Clicked')
    innerText.innerText = 'You clicked me!'
})

fetch('http://localhost:1337/guestbook')
  .then(response => response.json())
  .then(data => guestbook.innerText = data);