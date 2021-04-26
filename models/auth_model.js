/**
 * auth Model
 */

const connection = require("../database/connection_database.js")

exports.getLogin = (username, password, done) => {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM user WHERE email = ? AND pass = ? ", [username, password])
    })
}
