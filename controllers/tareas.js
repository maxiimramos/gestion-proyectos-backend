const express = require('express')
const db = require('../slqConfig')

const crearTareas = async(req, res) => {
    const {body} = req;
    const tarea =  await db.tareas.create(body);
    res.send({status:"OK", tarea});
  }
  /**
   * obtener tareas prohyecto
   * 
   * /tareas/proyecto/1
   * @param {} req 
   * @param {*} res 
   */
  const obtenerTareas = async(req, res) =>{
    const tareas = await db.tareas.findAll();
    // res.status(400).send({description:"Error al obtener los usuarios"});
    res.send({status:"OK", tareas});
  }
  
  const borrarTareas = async(req, res) =>{
    const {id} = req.params;
    const tarea = await db.tareas.destroy({
        where: {
          id
        }
      });
    res.send({status:"OK", tarea});
  }
  


module.exports = {crearTareas, obtenerTareas, borrarTareas};