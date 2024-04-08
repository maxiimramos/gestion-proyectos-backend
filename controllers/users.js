// Van a ir todos los endpoints relacionados con user
const express = require('express')
const app = express()
// const { Sequelize } = require('sequelize');
const { User } = require('../models/users');

const crearUsuario = (req, res) => {
    const user =  User.create({
    nombre: "test",
    correo: "Test",
    contraseña :"TestPass",
  });
}

module.exports = {crearUsuario};