const express = require('express');
const session = require('express-session');
const app = new express();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const cors = require('cors')
const corsOptions = { origin: `http://localhost:4200` }
// const corsOptions = { origin: `http://127.0.0.1:8080` }
app.use(cors(corsOptions))
require('./environments/dotenvConfig')


const authController = require("./controllers/auth_controller");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies for form http post
app.use(session({
    secret: "r8q,+&1LM3)CD('jilsqdfzAGpx1xm)-jhyfgNeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // Remember to set this
}));
app.use(passport.initialize());
app.use(passport.session());



passport.use(new LocalStrategy({
        username : 'username',
        password : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
        authController.getLogin(username, password, done)
    })
);

passport.serializeUser(function(user, done) {
    console.log("user ", user)
    if(user) done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
});



const router = require("./router/router")

app.use("/", router)

app.listen(process.env.PORT, () => {
    console.log(`Environnement: ${process.env.ENV} | version: ${process.env.VERSION} | port: ${process.env.PORT}`)
})
