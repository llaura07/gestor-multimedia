const conexion = require('../conexion.js');


const getAllUsers = (callback) => {
    const query = 'SELECT * FROM usuarios';
    conexion.query(query, (err, rows)=>{
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', rows);
        callback(null, rows);
    });
}

const createUser = (nombre, correo, Password, Rol, callback) => {
    const query = 'INSERT INTO usuarios (nombre, correo, Password, Rol) VALUES (?, ?, ?, ?)';
    conexion.query(query, [nombre, correo, Password, Rol], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const updateUser = (id, nombre, correo, Password, Rol, callback) => {
    const query = 'UPDATE usuarios SET nombre = ?, correo = ?, Password = ?, Rol = ? WHERE id = ?';
    conexion.query(query, [nombre, correo, Password, Rol, id], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const deleteUser = (id, callback) => {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    conexion.query(query, [id], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const getCategorias = (callback) => {   
    const query = 'SELECT * FROM categorias';
    conexion.query(query, (err, rows)=>{
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', rows);
        callback(null, rows);
    });
}

const createCategoria = (nombre, callback) => {
    const query = 'INSERT INTO categorias (nombre) VALUES (?)';
    conexion.query(query, [nombre], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const updateCategoria = (id, nombre, callback) => {
    const query = 'UPDATE categorias SET nombre = ? WHERE id = ?';
    conexion.query(query, [nombre, id], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const deleteCategoria = (id, callback) => {
    const query = 'DELETE FROM categorias WHERE id = ?';
    conexion.query(query, [id], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const getVideos = (callback) => {
    const query = 'SELECT videos.id, videos.nombre, videos.autor, videos.url, videos.categoria_id, categorias.nombre  as categoria FROM videos INNER JOIN categorias ON videos.categoria_id = categorias.id';
    conexion.query(query, (err, rows)=>{
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', rows);
        callback(null, rows);
    });
}

const createVideo = (nombre, autor, url, categoria, callback) => {
    const query = 'INSERT INTO videos (Nombre, Autor, Url, Categoria_id) VALUES (?, ?, ?, ?)';
    conexion.query(query, [nombre, autor, url, categoria], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const updateVideo = (id, nombre, autor, url, categoria_id, callback) => {  
    const query = 'UPDATE videos SET Nombre = ?, Autor = ?, Url = ?, Categoria_id = ? WHERE id = ?';
    conexion.query(query, [nombre, autor, url, categoria_id, id], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}

const deleteVideo = (id, callback) => {
    const query = 'DELETE FROM videos WHERE id = ?';    
    conexion.query(query, [id], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
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
    deleteCategoria,
    getVideos,
    createVideo,
    updateVideo,
    deleteVideo,
    
};