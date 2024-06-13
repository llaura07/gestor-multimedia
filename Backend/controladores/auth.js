const express = require('express');
const authExpressRouter = express.Router();
const { getUser, createSession, closeSession } = require('../modelos/usuarios');
const CrearToken = require('../../servicios/validacion');

authExpressRouter.post('/login', async (req, res) => {
    const { correo, password } = req.body;
    getUser(correo, password, (rows) => {
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        console.log(rows);
        const token = CrearToken(rows[0]);
        const userId = rows[0].Id;
        const userRole = rows[0].Role; // Asegúrate de que tu función getUser devuelve un objeto de usuario que incluye una propiedad Role

        // Crear la sesión aquí
        const fecha_inicio = new Date();
        var formattedDateInicio = fecha_inicio.toISOString().slice(0, 19).replace('T', ' ');
       
        const fecha_fin = null;
        if (fecha_fin!=null) {
            var formattedDateFin = fecha_fin.toISOString().slice(0, 19).replace('T', ' ');
        }else{
            formattedDateFin = null;
        }
        console.log("token: "+token+" fecha_inicio: "+formattedDateInicio+" fecha_fin: "+formattedDateFin+" userId: "+userId);
        
        createSession(token, formattedDateInicio, formattedDateFin, userId, (err, result) => {
            if (err){
                return res.status(500).json({ message: 'Database error' });
            }
            res.status(200).json({ message: 'Usuario encontrado', token: token, userId: userId, role: userRole, session: result });
        });
    });
});

authExpressRouter.put('/logout', async (req, res) => {
    try {
        // Obtiene la cabecera de autorización y divide para obtener el token
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'No authorization header provided' });
        }
        
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const fecha_fin = new Date();
        const formattedDateFin = fecha_fin.toISOString().slice(0, 19).replace('T', ' ');

        // Llama a la función closeSession con el token y la fecha final
        closeSession(token, formattedDateFin, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error' });
            }
            res.status(200).json({ message: 'Sesión cerrada', session: result });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = authExpressRouter;