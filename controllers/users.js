// Van a ir todos los endpoints relacionados con user
const express = require('express')
const db = require('../slqConfig')
const app = express()
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
// const { Sequelize } = require('sequelize');
//const { User } = require('../models/users');


const crearUsuario = async(req, res) => {
  const {body} = req;
  const user =  await db.users.create(body);
  res.send({status:"OK", user});
}

const obtenerUsuarios = async(req, res) =>{
  const users = await db.users.findAll();
  // res.status(400).send({description:"Error al obtener los usuarios"});
  res.send({status:"OK", users});
}

const borrarUsuarios = async(req, res) =>{
  const {id} = req.params;
  const user = await db.users.destroy({
      where: {
        id
      }
    });
  res.send({status:"OK", user});
}

const modificarUsuarios = async(req, res) =>{
  const {id} = req.params;
  // const {nombre, ...} = req.body;
  const user = await db.users.update(
    { "contraseña": '777777' },
  {
    where: {
      id
    },
  },
);
res.send({status:"OK", user});  
}

/**
 * LOGIN 
 * Recibir datos y verificar contra lo que tienes almacenado
 * Y devolver un OK o un KO res.status(400).send({error: "Fallo en el login"})
 */

const registrarUsusarios = async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;
    // check si el email existe
     
    const userExists = await db.users.findOne({
      where: {correo}
    });
    if (userExists) {
      return res.status(400).send({error: "Fallo en el login"})
    }

    
    const user = await db.users.create({
      nombre,
      correo,
      contraseña: await bcrypt.hash(contraseña, 15),
    });
    return res.status(200).send({status:"OK", user});
  }catch (err) {
    console.log("ERROR", err)
    return res.status(500).send({error: "Fallo en el login"});
  }  
}

const inicioSesionUsuarios = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const user = await db.users.findOne({
      where: {correo}
    });
    if (!user) {
      return res.status(404).json('Correo no encontrado');
    }

    // Verificar contraseña
    const validarContraseña = await bcrypt.compare(contraseña, user.contraseña);
    if (!validarContraseña) {
      return res.status(404).json('Combinación de correo y contraseña incorrecta');
    }

    // Autenticar user con jwt
  const token = jwt.sign({id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRATION
  });

  res.status(200).send({
    id: user.id,
    nombre: user.nombre,
    correo: user.correo,
    accessToken: token,
  });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error en el inicio de sesión');
  }
}

/**Modificar usuario
 * /users/{id}
 * JSON: {}
 * Coger un usuario y actualizar los valores (funcion de sequelize.)
 */
/*
* - 1 Creas el modelo (users)
  - 2 Creas las funciones en el controller (borrar usuarios) y la exportas
  - 3 Importas la funcion en el index (o en un router)
  - 4 Si necesitas query params añades /:(id o lo que sea)
*/
/**
 * DELETE
 * PUT
 * LOGIN 
 * // TAREAS O PROYECTOS
 * // crearTareas => Relaciones 
 */
// Borrar usuario ?id 
module.exports = {crearUsuario, obtenerUsuarios, borrarUsuarios, modificarUsuarios, registrarUsusarios, 
inicioSesionUsuarios};
/**
 * API REST
 * ${POST}
 * Recibir unos datos => Devolver unos datos >>>>!!!!! No hace nada relacionado con el flujo de usuario del FE
 * Solo envio de datos
 * => PETICION => http://localhost/crear?param1="test" => Query parameters
 * =>          => http://localhost/crear
 *                req.body = {usuario:"Daniel",contraseña: "blabla"} => JSON
 * 
 *                res.send({status:"OK", {name:"Daniel"}}) => Envio de respuesta
 * 
 * Compuesta de ENDPOINTS: ?  Un endpoint es una URL a la que envias datos para obtener una respuesta 
 * 1 Api REST puede tener & Endpoints.
 * http://localhost:3000/
 *          /usuario/crear
 *          /usuario/modificar
 *          /usario/obtener
 *          /tareas/crear 
 * 
 * HTTP => PROTOCOLO DE COMUNICACION web utilizado por API REST (y por otros)
 *      => CABECERAS, BODY, ...
 *      => OPERACIONES(TIPO DE OPERACIONES): => HTTP es un PROTOCOLO y por tanto no "OBLIGA" a casi nada
 *       - GET => Obtener datos => DEBE MANDAR QUERY PARAMS O NADA => EN UN GET no puedes pasar un JSON.
 *                /usuarios => Obtener todos los usuarios
 *                /usuarios?id=12 => Obtener el usuario con id 12
 *       - POST => CREACION de datos 
 *                /usuarios   {usuario: "DATA"} 
 *       - PUT  => MODIFICACION de datos
 *                /usuarios?id=12 {usuario:"Data"}
 *       - DELETE => BORRADO de datos
 *                /usuarios?id=12  => Borrarias el usuario 12
 */


/**
 * Crear usuario (con los datos de un formulario "registrar")
 * Pasar los datos del FE al BE => Enviar datos.
 * Devolver una respuesta.
 */
/**
 * Mostrar datos de usuario => Configuracion del usuario
 */
/**
 * Login !!
 */
/**
 * Modificar el usuario
 */
/**
 * Borrar el usuario
 */
/*
  CRUD => CREATE; READ; UPDATE; DELETE;
*/
