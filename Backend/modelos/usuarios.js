const conexion = require('../conexion.js');


const getUser = (usuario, contraseña, callback) =>{
    const query = 'SELECT * FROM usuarios WHERE correo = ? AND password = ?';
    conexion.query(query, [usuario, contraseña], (err, rows) => {
        if(err) throw err;
        callback(rows);
    });
}

const createSession = (token, fecha_inicio, fecha_fin, usuario_id, callback) => {
    const query = 'INSERT INTO sessiones_activas (Token, Fecha_inicio, Fecha_fin, Usuarios_id) VALUES (?, ?, ?, ?)';
    conexion.query(query, [token, fecha_inicio, fecha_fin, usuario_id], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result);
        callback(null, result);
    });
}
const closeSession = (token, fecha_fin, callback) => {
    const query = 'UPDATE sessiones_activas SET Fecha_fin = ? WHERE Token = ?';
    conexion.query(query, [fecha_fin, token], (err, result) => {
        if(err) {
            console.error('Database insertion error:', err);
            callback(err, null);
            return;
        }
        console.log('Database insertion result:', result, token, fecha_fin);
        callback(null, result);
    });
}



module.exports = {
    getUser,
    createSession,
    closeSession
}; 