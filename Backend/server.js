const express = require('express');
const cors = require('cors');
const {  router} = require('./controladores/user_functions_controller.js');
//const conexion = require('./conexion.js');
const app = express();
app.use(cors());
app.use(express.json()); // Middleware para parsear JSON en el body de las peticiones
app.use(cors({
    origin: 'http://localhost' 
}));

app.use(express.json());
app.listen(8080, (res) => {
    console.log('Server running on port 8085');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const authRoutes = require('./controladores/auth.js');
app.use('/auth', authRoutes);


app.use('/user_functions', router);