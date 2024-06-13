const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const config = require('../../config');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'upct',
    database: 'gestor_multimedia',
    port: 3307
}); 



const { getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    getVideos,
    createVideo,
    updateVideo,
    deleteVideo} = require('../modelos/user_functions');



    const authMiddleware = (req, res, next) => {
        const authHeader = req.headers.authorization;
    
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization header missing or incorrect' });
        }
    
        const token = authHeader.split(' ')[1]; // Extraer el token
    
        jwt.verify(token, config.SECRET_TOKEN, (err, decoded) => {
            if (err) {
                console.error('Token verification failed:', err);
                return res.status(401).json({ message: 'Invalid token' });
            }
    
            db.query('SELECT * FROM sessiones_activas WHERE Token = ?', [token], (error, results) => {
                if (error) {
                    console.error('Database query error:', error);
                    return res.status(500).json({ message: 'Database error' });
                }
    
                if (results.length === 0) {
                    return res.status(401).json({ message: 'No active session' });
                }
    
                // Adjuntar información del usuario a la solicitud si es necesario
                req.usuario = { id: decoded.usuario };
    
                next();
            });
        });
    };



// Endpoints para CRUD de usuarios
router.get('/users', authMiddleware, (req, res) => {
    getAllUsers((err, rows) => {
        if (err) {
            console.error('Database error:', err);
            if (!res.headersSent) {
                return res.status(500).json({ message: 'Database error' });
            }
        } else {
            console.log('Database result:', rows);
            if (!res.headersSent) {
                return res.status(200).json(rows);
            }
        }
    });
});

router.post('/create_user', authMiddleware, (req, res) => {
    const { nombre, correo, Password, Rol } = req.body;
    createUser(nombre, correo, Password, Rol, (err, result) => {
        //res.status(200).json(result);
        if (err){
            if (!res.headersSent) {
                return res.status(500).json({ message: 'Database error' });
            }
        } else {
            if (!res.headersSent) {
                return res.status(200).json(result);
            }
        }
    });
});

router.put('/update_user/:id', authMiddleware, (req, res) => {
    const { nombre, correo, Password, Rol } = req.body;
    const { id } = req.params;
    updateUser(id, nombre, correo, Password, Rol, (err, result) => {
        if (err){
            if (!res.headersSent) {
                return res.status(500).json({ message: 'Database error' });
            }
        } else {
            if (!res.headersSent) {
                return res.status(200).json(result);
            }
        }
    });
});

router.delete('/delete_user/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    deleteUser(id, (err, result) => {
        if (err){
            if (!res.headersSent) {
                return res.status(500).json({ message: 'Database error' });
            }
        } else {
            if (!res.headersSent) {
                return res.status(200).json(result);
            }
        }
    });
});


// Endpoints para CRUD de categorias
router.get('/categorias', authMiddleware, (req, res) => {
    getCategorias((err, rows) => {
        //res.status(200).json(rows);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(rows);
    });
});

router.post('/create_categoria', authMiddleware, (req, res) => {
    const { nombre } = req.body;
    createCategoria(nombre, (err, result) => {
        //res.status(200).json(result);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(result);
    });
});

router.put('/update_categoria/:id', authMiddleware, (req, res) => {
    const { nombre } = req.body;
    const { id } = req.params;
    updateCategoria(id, nombre, (err, result) => {
        //res.status(200).json(result);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(result);
    });
});

router.delete('/delete_categoria/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    deleteCategoria(id, (err, result) => {
        //res.status(200).json(result);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(result);
    });
});

// CRUD de videos
router.get('/videos', authMiddleware,  (req, res) => {
    getVideos((err, rows) => {
        //res.status(200).json(rows);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(rows);
    });
});

router.post('/create_video', authMiddleware,  (req, res) => {
    const { nombre, autor, url, categoria } = req.body;
    createVideo(nombre, autor, url, categoria, (err, result) => {
        //res.status(200).json(result);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(result);
    });
});

router.put('/update_video/:id', authMiddleware,  (req, res) => {
    const { nombre, autor, url, categoria_id } = req.body;
    const { id } = req.params;
    updateVideo(id, nombre, autor, url, categoria_id, (err, result) => {
        //res.status(200).json(result);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(result);
    });
});

router.delete('/delete_video/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    deleteVideo(id, (err, result) => {
        //res.status(200).json(result);
        if (err){
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json(result);
    });
});



module.exports = { router, authMiddleware };

