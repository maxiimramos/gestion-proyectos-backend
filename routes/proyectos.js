const express = require('express')
const app = express()

const {crearProyectos, obtenerProyectos, borrarProyectos} = require('../controllers/proyectos');

app.post('', crearProyectos);
app.get('/:userId', obtenerProyectos);
app.delete('/:id', borrarProyectos);

module.exports = app;