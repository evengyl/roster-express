const jwt = require('express-jwt');

exports.auth = (res, req) => {
    jwt({ secret: secret, algorithms: ['HS256']})
        .unless(
            { path: [
                    '/token/sign'
                ]}
        )
    // res.status(200).json({"statusCode" : 404 , "user" : error});
}

exports.isLoggedIn = (req, res, next) => {

    // return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}
