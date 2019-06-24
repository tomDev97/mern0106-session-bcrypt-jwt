const express = require('express');
const app = express();
const expressSession = require('express-session');
const usersRoute = require('./routers/users');
const guestsRoute = require('./routers/guests');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

var users = [
    { username: "tom97dev", password: '$2b$10$5R09nvUkWtIobSMFI2zdZ.I4i0Y/UQYa/vueVWm.APGzQuakr8EOq' },
    { username: "phuheo97", password: '$2b$10$5R09nvUkWtIobSMFI2zdZ.I4i0Y/UQYa/vueVWm.APGzQuakr8EOq' }
]

//SETTING STATIC
app.use(express.static('./public'));

//SET VIEW ENGINE
app.set('views', './views');
app.set('view engine', 'ejs');

//MIDDLEWARE BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//MIDDLEWARE SESSION
app.use(expressSession({
    secret: 'MERN_STACK_0106',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3000
    }
}));

app.use('/users', usersRoute);
app.use('/guests', guestsRoute);


app.get('/', (req, res) => {
    res.render('index');
})


app.get('/login', (req, res) => {
    res.render('login');
})


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const infoUser = await users.find(user => Object.is(username.toString(), user.username.toString()));

    if (!infoUser) return res.send('USER NOT FOUND');

    const isMatching = await bcrypt.compare(password, infoUser.password);
    if (isMatching) {
        req.session.LOGIN = true
        return res.render('users');
    }
    res.json({ message: 'LOGIN FALSE' });

})






app.listen(3000, () => console.log(`port 3000`));