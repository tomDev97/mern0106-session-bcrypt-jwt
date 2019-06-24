const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

/**
 * GET USERS
 * des : login = true ? truy cap dc : day qua route error
 */
router.get('/', (req, res) => {
    let {LOGIN} = req.session;
    if(LOGIN) return res.render('users');
    res.render('login');
})

// app.post('/create', (req, res) => {
//     let { username, password } = req.body;
//     bcrypt.genSalt(8)
//         .then(salt => {
//             bcrypt.hash(password, salt)
//                 .then(passwordHash => users.push({username, password : passwordHash}))
//                 .catch(console.log)
//         });
//     res.json({users});
// })

module.exports = router;