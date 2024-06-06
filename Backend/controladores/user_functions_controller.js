const express = require('express');
app = express();
app.use(express.json()); 
const router = express.Router();

const { getAllUsers, 
        createUser,
        updateUser,
        deleteUser } = require('../modelos/user_functions');

// Endpoints para CRUD de usuarios
router.get('/users', (req, res) => {
    getAllUsers((rows) => {
        res.status(200).json(rows);
    });
});

router.post('/create_user', (req, res) => {
    const { nombre, correo, password, rol } = req.body;
    createUser(nombre, correo, password, rol, (result) => {
        res.status(200).json(result);
    });
});

router.put('/update_user/:id', (req, res) => {
    const { nombre, correo, password, rol } = req.body;
    const { id } = req.params;
    updateUser(id, nombre, correo, password, rol, (result) => {
        res.status(200).json(result);
    });
});

router.delete('/delete_user/:id', (req, res) => {
    const { id } = req.params;
    deleteUser(id, (result) => {
        res.status(200).json(result);
    });
});


// Endpoints para CRUD de categorias
router.get('/categorias', (req, res) => {
    getCategorias((rows) => {
        res.status(200).json(rows);
    });
});

router.post('/create_categoria', (req, res) => {
    const { nombre } = req.body;
    createCategoria(nombre, (result) => {
        res.status(200).json(result);
    });
});

router.put('/update_categoria/:id', (req, res) => {
    const { nombre } = req.body;
    const { id } = req.params;
    updateCategoria(id, nombre, (result) => {
        res.status(200).json(result);
    });
});

router.delete('/delete_categoria/:id', (req, res) => {
    const { id } = req.params;
    deleteCategoria(id, (result) => {
        res.status(200).json(result);
    });
});

module.exports = router;
