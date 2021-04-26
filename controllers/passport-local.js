const passport = require("passport");

exports.auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', { session: true },(error, user) => {
            if(!user){
                res.status(200).json({"statusCode" : 404 , "user" : error});
            } else {
                req.session.messages = "Login successfull";
                req.session.authenticated = true;
                req.authenticated = true;
            }
            req.login(user, function(error) {
                if (error) {
                    return next(error);
                }
                next();
            });

        })(req, res, next);
    }
}

exports.isLoggedIn = (req, res, next) => {
    console.log('.........');
    console.log('isLoggedIn cookies ' ,req.session.cookie.maxAge);
    console.log('session ', req.session);
    console.log('isAuthenticated ', req.isAuthenticated());
   // console.log('user ', req.session.passport.user)
    if(req.isAuthenticated()){
        // console.log('user ', req.session.passport.user)
        return next()
    }
    return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}
