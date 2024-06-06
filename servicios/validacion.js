const jwt = require('jsonwebtoken');
const config = require('../config');

function CrearToken(usuario) {
    const payload = {
        usuario: usuario._id,
        iat: Date.now(),
    };
    return jwt.sign(payload, config.SECRET_TOKEN);
}
module.exports = CrearToken;