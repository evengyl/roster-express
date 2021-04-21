const express = require('express')
const passport = require("passport");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Roster')
})

app.post('/login', passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login' }));

app.listen(port, () => {
    console.log(`port: ${port}`)
})
