const conexion = require('./conexion.js');


const getUser = (usuario, contraseña, callback) =>{
    const query = 'SELECT * FROM usuarios WHERE correo = ? AND password = ?';
    conexion.query(query, [usuario, contraseña], (err, rows) => {
        if(err) throw err;
        callback(rows);
    });
}
module.exports = {
    getUser
}; 