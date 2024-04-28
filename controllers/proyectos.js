const express = require('express')
const db = require('../slqConfig');
// const tareas = require('../models/tareas');
const app = express()

const crearProyectos = async (req, res) => {
  const { body } = req;
  const proyecto = await db.proyectos.create(body);
  res.send({ status: "OK", proyecto });
}

const obtenerEtiquetasDeTareas = async (tareas) => {
  return await Promise.all(tareas.map(async (tarea) => {
    const etiquetas = await db.etiquetas.findAll({ where: { idTarea: tarea.id }, raw: true });
    return {
      ...tarea,
      etiquetas
    };
  }));
}
const obtenerProyectos = async (req, res) => {
  // const { body } = req;
  const {userId} = req.params;
  const proyectos = await db.proyectos.findAll({ where: { idUsuario: userId }, raw: true });


  const proyectosConEtiqueta = await Promise.all(proyectos.map(async (proyecto) => {
    const tareas = await db.tareas.findAll({ where: { idProyecto: proyecto.id }, raw: true });
    const tareasConEtiqueta = await obtenerEtiquetasDeTareas(tareas);
    console.log("Tareas", tareas);
    return {
      ...proyecto,
      tareas: tareasConEtiqueta
    };
  }));
  // res.status(400).send({description:"Error al obtener los usuarios"});
  // Modificar esta query para que sea algo asi como 
  // Find all => Inner join con tareas que pertenezcan a cada proyecto
  // proyecto: 1
  // 
  // select * from proyecto, tarea where proyecto = 1 inner join proyecto.id == tarea.proyectoID
  /* tareas: [{
    tarea:1
    awdawdawd
  }]*/


  res.send({ status: "OK", proyectos: proyectosConEtiqueta });
}

const borrarProyectos = async (req, res) => {
  const { id } = req.params;
  const proyecto = await db.proyectos.destroy({
    where: {
      id
    }
  });
  res.send({ status: "OK", proyecto });
}



module.exports = { crearProyectos, obtenerProyectos, borrarProyectos };