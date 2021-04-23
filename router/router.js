const express = require("express")
const app = express()
const passport = require("passport")
const router = express.Router()
const cookieParser = require('cookie-parser') // à remplacer par le storage
const session = require('express-session')
const bodyParser = require('body-parser')
const flash = require('connect-flash');
require('../config/passport-local')(passport);

app.use(cookieParser()); // à remplacer par le storage
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(flash());

const loginController =  require("../controllers/login_controller")
const userController =  require("../controllers/user_controller")

/*

app.post('/signup', passport.authenticate('local-signup'), userResponse);
app.post('/login', passport.authenticate('local-login'), userResponse);
app.get('/logout', (req, res)=>{
    req.logout();
    return res.json({status:'success'});
});
*/

// login
// http://localhost:3000/api/login
router.post("/api/login",passport.authenticate('local',{session:true}),(req,res)=>{
        //console.log(req.user);
        if(req.user !== undefined){
            res.send(req.user);
        }else{
            res.send("not able to generate the token.username or password incorrect.");
        }
    }
)

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
