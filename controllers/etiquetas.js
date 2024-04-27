const express = require('express')
const db = require('../slqConfig')

const crearEtiquetas = async(req, res) => {
    const {nombre, descripcion, idTarea} = req.body;
    const etiqueta =  await db.etiquetas.create({nombre, descripcion, idTarea});
     res.send({status:"OK", etiqueta});
  }
  /**
   * obtener tareas prohyecto
   * 
   * /tareas/proyecto/1
   * @param {} req 
   * @param {*} res 
   */
  const obtenerEtiquetas = async(req, res) =>{
    const etiquetas = await db.etiquetas.findAll();
    // res.status(400).send({description:"Error al obtener los usuarios"});
    res.send({status:"OK", etiquetas});
  }
  
  const borrarEtiquetas = async(req, res) =>{
    const {id} = req.params;
    const etiqueta = await db.etiquetas.destroy({
        where: {
          id
        }
      });
    res.send({status:"OK", etiqueta});
  }
  


module.exports = {crearEtiquetas, obtenerEtiquetas, borrarEtiquetas};