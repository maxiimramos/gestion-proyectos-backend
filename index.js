const express = require('express')
const app = express()

// const {sqlConfig} = require('./slqConfig')
const {crearUsuario} = require('./controllers/users')



app.post('/users', crearUsuario);






// Una vez esta todo configurado, ponemos a la escucha el servidor.
app.listen(3000, async()=> {
  /*const user = await User.create({
    nombre: "test",
    correo: "Test",
    contraseña :"TestPass",
  });*/
    console.log("SERVIDOR ARRANCADO HOLA QUE TAL");
})