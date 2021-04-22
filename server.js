const express = require('express')
const app = express()
const passport = require("passport")
    , LocalStrategy = require('passport-local').Strategy
// const cookieParser = require('cookie-parser') # à remplacer par le storage
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const corsOptions = { origin: `http://localhost:*` }
app.use(cors(corsOptions))

require('./environments/dotenvConfig')

//conndb = require('./database/connectionDatabase')
// require('./strategies/passport-local')(passport);
// app.use(cookieParser()); # à remplacer par le storage

/*
app.use(session({
    secret: process.env.SECRET
}))
*/

/*app.use(passport.initialize())
app.use(passport.session())*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// routage express
const router = require("./router/router")
app.use("/", router)

// require('./router/auth_route.js')(app, passport)

app.listen(process.env.PORT, () => {
    console.log(`Environnement: ${process.env.ENV} | version: ${process.env.VERSION} | port: ${process.env.PORT}`)
})
