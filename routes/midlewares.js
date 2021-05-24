const authService = require('../services/auth');

function authMidleware(req, res, next) {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).send({message: "Access denied. No token provided."});
    }
    const user = authService.verifyToken(token);
    if (!user) {
        return res.status(400).send({message: 'Invalid token'});
    }

    req.user = user;
    return next();


}

module.exports = {
    authMidleware
}