const express = require("express")
const router = express.Router()
const userController =  require("../controllers/user_controller")
const passportLocal = require('../controllers/passport-local')
const passport = require("passport");

// signin
// http://localhost:3000/api/signin
router.post('/api/signin', passport.authenticate('local'), passportLocal.auth);

// signup
// http://localhost:3000/api/signup
// router.post("/api/signup", signupController.getAll)

// logout
// http://localhost:3000/api/logout
// router.post("/api/logout", logoutController.getAll)

// user
// http://localhost:3000/api/user
router.get('/api/user', passportLocal.isLoggedIn,  userController.getAll)

module.exports = router
