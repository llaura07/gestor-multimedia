const express = require('express');
const conexion = require('./conexion.js');
const app = express();

app.listen(8084, (res) => {
    console.log('Server running on port 8082');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const authRoutes = require('./controladores/auth.js');
app.use('/auth', authRoutes);