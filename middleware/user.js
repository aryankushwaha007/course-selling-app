const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; // aryan@gmail.com
    const password = req.headers.password; /// 123456

    User.findOne({
        username: username,
        password: password
    })
    .then(function(value) {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "User doesnt exist"
            })
        }
    })
}

module.exports = userMiddleware;
