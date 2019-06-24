const jwt = require('jsonwebtoken');

const KEY = 'tom97dev';

const user = { name : 'user1', password : 'user1'};


jwt.sign(user, KEY, (err, token) => {
    if(err) return console.log(err.message);
    console.log(`token : ${token}`);
})


jwt.verify(token, KEY, (err, decoded) => {
    if(err) return console.log(err.message);
    console.log(decoded);
})