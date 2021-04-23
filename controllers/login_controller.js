/**
 * user Controller
 */

const userModel = require("../models/user_model")

exports.getLogin = (req, res) => {
    userModel.getLogin(req.body).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
