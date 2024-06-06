const conexion = require('../conexion.js');


const getAllUsers = (callback) => {
    const query = 'SELECT * FROM usuarios';
    conexion.query(query, (err, rows)=>{
        if(err) throw err;
        callback(rows);
    });
}

const createUser = (nombre, correo, Password, rol, callback) => {
    const query = 'INSERT INTO usuarios (nombre, correo, password, rol) VALUES (?, ?, ?, ?)';
    conexion.query(query, [nombre, correo, Password, rol], (err, result) => {
        if(err) throw err;
        callback(result);
    });
}

const updateUser = (id, callback) => {
    const query = 'UPDATE usuarios SET nombre = ?, correo = ?, password = ?, rol = ? WHERE id = ?';
    conexion.query(query, [nombre, correo, Password, rol, id], (err, result) => {
        if(err) throw err;
        callback(result);
    });
}

const deleteUser = (id, callback) => {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    conexion.query(query, [id], (err, result) => {
        if(err) throw err;
        callback(result);
    });
}

const getCategorias = (callback) => {   
    const query = 'SELECT * FROM categorias';
    conexion.query(query, (err, rows)=>{
        if(err) throw err;
        callback(rows);
    });
}

const createCategoria = (nombre, callback) => {
    const query = 'INSERT INTO categorias (nombre) VALUES (?)';
    conexion.query(query, [nombre], (err, result) => {
        if(err) throw err;
        callback(result);
    });
}

const updateCategoria = (id, nombre, callback) => {
    const query = 'UPDATE categorias SET nombre = ? WHERE id = ?';
    conexion.query(query, [nombre, id], (err, result) => {
        if(err) throw err;
        callback(result);
    });
}

const deleteCategoria = (id, callback) => {
    const query = 'DELETE FROM categorias WHERE id = ?';
    conexion.query(query, [id], (err, result) => {
        if(err) throw err;
        callback(result);
    });
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria
};