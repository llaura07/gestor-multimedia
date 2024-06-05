const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'upct',
    database: 'gestor_multimedia', 
    port: 3307
});

conexion.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = conexion;