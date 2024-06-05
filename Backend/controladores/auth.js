const express = require('express');
app = express();
const authExpressRouter = express.Router();
const { getUser } = require('../modelos/usuarios');

authExpressRouter.post('/login', async (req, res) => {
const { correo, password } = req.body;
    getUser(correo, password, (rows) => {
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario encontrado' });
    });
});

modelo.exports = authExpressRouter;