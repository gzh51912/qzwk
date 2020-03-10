const jwt = require('jsonwebtoken');

let secret = 'lisi';
function create(data, expiresIn = 604800) {
    let token = jwt.sign({ data }, secret, {
        expiresIn
    });
    return token;
}

function verify(token) {
    let res;
    try {
        let result = jwt.verify(token, secret);
        console.log('token校验：', result)
        res = true;
    } catch (err) {
        res = false;
    }

    return res;
}

module.exports = {
    create,
    verify
}