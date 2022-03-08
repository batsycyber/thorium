const jwt = require('jsonwebtoken')
let authentication = function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ msg: "token must be present" });
    let decodededToken = jwt.verify(token, "functionup-thorium");
    if (!decodededToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
}
module.exports.authentication = authentication