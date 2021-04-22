// var db = require("../models");

module.exports = function (app, passport) {
    app.post("/login", passport.authenticate('local-login'),
        function (req, res) {
            // res.json(req.user)
            res.send('login')
        })
}
