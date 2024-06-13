const jwt = require('jsonwebtoken');
const config = require('../config');

function crearToken(usuario) {
    if (!config.SECRET_TOKEN) {
        throw new Error('SECRET_TOKEN no está definido en la configuración.');
    }

    const payload = {
        usuario: usuario.Id,
        iat: Math.floor(Date.now() / 1000), // Convertir milisegundos a segundos
    };

    try {
        return jwt.sign(payload, config.SECRET_TOKEN);
    } catch (error) {
        console.error('Error al crear el token:', error);
        throw error; // Re-lanzar el error después de loguearlo
    }
}

module.exports = crearToken;