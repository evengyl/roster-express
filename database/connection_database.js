const mysql = require("promise-mysql")

const host = process.env.HOST
const port = process.env.PORT_DB
const userDB = process.env.USER_DB
const password = process.env.PASS
const database = process.env.DB

console.log(process.env.HOST)

module.exports = mysql.createConnection({
    host: host,
    port: port,
    user: userDB,
    password: password,
    database: database
})
