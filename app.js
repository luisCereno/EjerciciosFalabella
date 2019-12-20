//Requires
const express = require('express');
const bodyParser = require('body-parser');

//Funciones
const funcion = require('./src/funcion01');

//Inicializar variables
const app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rutas
app.use('/', funcion);

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});