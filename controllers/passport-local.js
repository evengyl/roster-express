const passport = require("passport");

exports.auth = (req, res, next) => {
    
    req.logIn(req.user, (error) => {
        if(error)
            res.status(400).json({...error})
        else
            res.status(200).json({"user" : req.user });
    })        
}

exports.isLoggedIn = (req, res, next) =>
{
    if(req.isAuthenticated())
        return next()
}
