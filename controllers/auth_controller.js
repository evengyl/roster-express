/**
 * user Controller
 */

const authModel = require("../models/auth_model")

exports.getLogin = (username, password, done) => {

    authModel.getLogin(username, password).then((datas) => {
        if (datas.length <= 0) {
            // console.log("User not found");
            return done(null, false)
        } else {
            if (username === datas[0].email && password === datas[0].pass) {
                // console.log("Authorized access");
                return done(null, datas[0])
            } else {
                // console.log("Unauthorized access");
                return done(null, false)
            }
        }

    }).catch((error) => { return done(null, false, {message : error}) })
}
