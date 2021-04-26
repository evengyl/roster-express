const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const cors = require('cors')
const corsOptions = {origin: `http://localhost:4200`}
// const corsOptions = { origin: `http://127.0.0.1:8080` }
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) // support encoded bodies for form http post

require('./environments/dotenvConfig')

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

//Root
app.get('/', (req, res) => {
    res.json("Hello World");
});

/* CODE IN BETWEEN */
//SECRET FOR JSON WEB TOKEN
let secret = 'some_secret';

//ALLOW PATHS WITHOUT TOKEN AUTHENTICATION
app.use(expressJWT({secret: secret, algorithms: ['HS256']})
    .unless(
        {
            path: [
                '/api/signin'
            ]
        }
    ));

/* CREATE TOKEN FOR USE */
app.get('/api/signin', (req, res) => {
    var userData = {
        "name": "Jhon Doe",
        "id": "1"
    }
    let token = jwt.sign(userData, secret, {expiresIn: '15s'})
    res.status(200).json({"token": token, "user": userData});
});

app.get('/api/dashboard', (req, res) => {
    res.status(200)
        .json({
            "success": true,
            "msg": "Secrect Access Granted"
        });
});

/* CODE IN BETWEEN */

/* LISTEN */
app.listen(process.env.PORT, () => {
    console.log(`Environnement: ${process.env.ENV} | version: ${process.env.VERSION} | port: ${process.env.PORT}`)
})
