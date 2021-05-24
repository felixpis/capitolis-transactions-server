const jwt = require('jsonwebtoken');
const key = 'my_secret_key';
const USER = 'capitolis';

function login(userName) {
    if (userName !== USER) {
      return null;
    }
    const token = jwt.sign({userName}, key, {expiresIn: '30 days'});
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, key);
    return decoded;
}

module.exports = {
    login, verifyToken
}