const express = require('express');
const authExpressRouter = express.Router();
const { getUser } = require('../modelos/usuarios');
const CrearToken = require('../../servicios/validacion');

authExpressRouter.post('/login', async (req, res) => {
const { correo, password } = req.body;
    getUser(correo, password, (rows) => {
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const token = CrearToken(rows[0]);
        res.status(200).json({ message: 'Usuario encontrado', token: token });
    });
});

module.exports = authExpressRouter;