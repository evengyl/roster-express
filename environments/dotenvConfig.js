const path = require('path')
const dotenv = require("dotenv")
exports = dotenv.config( { path: dotenv.config().parsed["IS_LOCAL"] === 'true' ? path.join(__dirname, `./.env.dev`) : path.join(__dirname, `./.env.prod`)})

