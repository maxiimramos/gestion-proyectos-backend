const express = require('express')
const app = express()

const { borrarEtiquetas, obtenerEtiquetas, crearEtiquetas } = require('../controllers/etiquetas');

app.post('', crearEtiquetas);
app.get('', obtenerEtiquetas);
app.delete('/:id', borrarEtiquetas);

module.exports = app;
