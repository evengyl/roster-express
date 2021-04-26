/**
 * user Controller
 */

const userModel = require("../models/user_model")

exports.getAll = (req, res) => {
    userModel.getAll().then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

/*
exports.getOne = (req, res) => {
    userModel.getOne(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.create = (req, res) => {
    userModel.create(req.body).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.update = (req, res) => {
    userModel.update(req.body, req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}

exports.delete = (req, res) => {
    userModel.delete(req.params.id).then((datas) => {
        res.json(datas)
    }).catch((error) => (console.log(error)))
}
*/
