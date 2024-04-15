const express = require('express')
const app = express()

const {crearUsuario, obtenerUsuarios, borrarUsuarios, modificarUsuarios, registrarUsusarios,
inicioSesionUsuarios} = require('../controllers/users')

app.post('', crearUsuario);
app.get('', obtenerUsuarios);
app.delete('/:id', borrarUsuarios);
app.put('/:id', modificarUsuarios);
app.post('/sign-up', registrarUsusarios);
app.post('/sign-in', inicioSesionUsuarios);
module.exports = app;