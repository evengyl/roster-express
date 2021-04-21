const express = require('express')
const passport = require("passport")
    , LocalStrategy = require('passport-local').Strategy;
const app = express()
const port = 3000

User = []

app.get('/', (req, res) => {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'passwd'
        },
        function(username, password, done) {
            User.findOne({ username: username }, function(err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));

    res.send('Roster')
})



app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/Dashboard',
        failureRedirect: '/login',
        failureFlash: true })
);

app.listen(port, () => {
    console.log(`port: ${port}`)
})
