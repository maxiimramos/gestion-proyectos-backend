const express = require('express')
const app = express()
require('dotenv').config()

const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// const {sqlConfig} = require('./slqConfig')

/**RUTAS DE USER */
app.use('/users', userRoutes);
//app.get('/users', obtenerUsuario);
// Una vez esta todo configurado, ponemos a la escucha el servidor.
app.listen(3000, async()=> {

  console.log("SERVIDOR ARRANCADO HOLA QUE TAL");
})