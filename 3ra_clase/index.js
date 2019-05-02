const fetch = require('isomorphic-fetch') 


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log('users:', users)
    })

