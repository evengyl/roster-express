const express = require('express')
const app = express()
const passport = require("passport")
    , LocalStrategy = require('passport-local').Strategy
// const cookieParser = require('cookie-parser') # à remplacer par le storage
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path');
const dotenv = require("dotenv")
dotenv.config( { path: dotenv.config().parsed["IS_LOCAL"] === 'true' ? path.join(__dirname, `./environments/.env.dev`) : path.join(__dirname, `./environments/.env.prod`)})
console.log(process.env.ENV)

// require('./strategies/passport-local')(passport);
// app.use(cookieParser()); # à remplacer par le storage

app.use(session({
    secret: process.env.SECRET
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// require('./routes/auth.js')(app, passport)

app.listen(process.env.PORT, () => {
    console.log(`Environnement: ${process.env.ENV} | version: ${process.env.VERSION} | port: ${process.env.PORT}`)
})
