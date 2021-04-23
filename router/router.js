const express = require("express")
const app = express()
const passport = require("passport")
    , LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const cookieParser = require('cookie-parser') // à remplacer par le storage
const session = require('express-session')

require('../strategies/passport-local')(passport);
app.use(cookieParser()); // à remplacer par le storage
app.use(session({
    secret: process.env.SECRET
}))
app.use(passport.initialize())
app.use(passport.session())

const loginController =  require("../controllers/login_controller")
const userController =  require("../controllers/user_controller")


// login
// http://localhost:3000/api/login
router.post("/api/login", loginController.getLogin)

// signin
// http://localhost:3000/api/signin
// router.post("/api/signin", signinController.getAll)

// signup
// http://localhost:3000/api/signup
// router.post("/api/signup", signupController.getAll)

// logout
// http://localhost:3000/api/logout
// router.post("/api/logout", logoutController.getAll)

// user
// http://localhost:3000/api/user
router.get("/api/user", userController.getAll)

module.exports = router
