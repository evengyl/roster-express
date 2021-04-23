const LocalStrategy   = require('passport-local').Strategy;
const flash = require('connect-flash');
const connection = require("../database/connection_database.js")
const bcrypt = require('bcrypt-nodejs');
// connection.query('USE roster_api');

module.exports = function (passport) {

    //
    // passport session setup
    //
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function(id, done) {
        connection.connect();
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
        connection.end();
    });

    //
    // LOCAL SIGNUP
    //
    passport.use(
        'local-signup',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField : 'email',
                passwordField : 'pass',
                passReqToCallback : true // allows us to pass back the entire request to the callback
            },
            function(req, email, pass, done) {
                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                connection.connect();
                connection.query("SELECT * FROM user WHERE email = ?",[email], function(err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                    } else {
                        // if there is no user with that username
                        // create the user
                        const newUserMysql = {
                            email: email,
                            password: bcrypt.hashSync(pass, null, null)  // use the generateHash function in our user model
                        };

                        const insertQuery = "INSERT INTO user ( email, pass ) values (?,?)";
                        connection.connect();
                        connection.query(insertQuery,[newUserMysql.username, newUserMysql.password],function(err, rows) {
                            newUserMysql.id = rows.insertId;

                            return done(null, newUserMysql);
                        });
                        connection.end();
                    }
                });
                connection.end();
            })
    );

    //
    // LOCAL LOGIN
    //
    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField : 'email',
                passwordField : 'pass',
                passReqToCallback : true // allows us to pass back the entire request to the callback
            },
            function(req, email, pass, done) { // callback with email and password from our form
                connection.connect();
                connection.query("SELECT * FROM user WHERE email = ?",[email], function(err, rows){
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                    }

                    // if the user is found but the password is wrong
                    if (!bcrypt.compareSync(pass, rows[0].password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                    // all is well, return successful user
                    return done(null, rows[0]);
                });
                connection.end();
            })
    );
};
