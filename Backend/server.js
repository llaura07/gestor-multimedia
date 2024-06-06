const express = require('express');
const cors = require('cors');
const conexion = require('./conexion.js');
const app = express();
app.use(cors());

app.use(cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
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

const userFunctionsRoutes = require('./controladores/user_functions_controller.js');
app.use('/user_functions', userFunctionsRoutes);