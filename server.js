const express = require('express')
const app = express()
const passport = require("passport")
    , LocalStrategy = require('passport-local').Strategy
// const cookieParser = require('cookie-parser') # à remplacer par le storage
const session = require('express-session')
const bodyParser = require('body-parser')

require('./environments/dotenvConfig')

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
