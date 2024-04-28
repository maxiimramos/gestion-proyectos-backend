const express = require('express')
const app = express()

const {crearTareas, obtenerTareas, borrarTareas} = require('../controllers/tareas');

app.post('', crearTareas);
app.get('', obtenerTareas);
app.delete('/:id', borrarTareas);


module.exports = app;