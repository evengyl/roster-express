const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const corsOptions = { origin: `http://localhost:4200` }
// const corsOptions = { origin: `http://127.0.0.1:8080` }
app.use(cors(corsOptions))

require('./environments/dotenvConfig')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// routage express
const router = require("./router/router")
app.use("/", router)

app.listen(process.env.PORT, () => {
    console.log(`Environnement: ${process.env.ENV} | version: ${process.env.VERSION} | port: ${process.env.PORT}`)
})
