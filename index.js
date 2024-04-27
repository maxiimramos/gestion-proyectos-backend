const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()
app.use(cors());
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



const userRoutes = require('./routes/users');
const proyectosRoutes = require('./routes/proyectos');
const tareasRoutes = require('./routes/tareas');
const etiquetasRoutes = require('./routes/etiquetas')
// const {sqlConfig} = require('./slqConfig')

/**RUTAS DE USER */
app.use('/users', userRoutes);
app.use('/proyectos', proyectosRoutes);
app.use('/tareas', tareasRoutes)
app.use("/etiquetas", etiquetasRoutes)
//app.get('/users', obtenerUsuario);
// Una vez esta todo configurado, ponemos a la escucha el servidor.
app.listen(3003, async()=> {

  console.log("SERVIDOR ARRANCADO HOLA QUE TAL");
})