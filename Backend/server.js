const express = require('express');
const conexion = require('./consultas.js');
const app = express();

app.listen(8080, (res) => {
    console.log('Server running on port 8080');
});
