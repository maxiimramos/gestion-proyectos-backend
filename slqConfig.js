const { Sequelize, DataTypes } = require('sequelize');
// const User = require("./models/User");

const connection = new Sequelize("gestion_tareas", "root", "password1234", {
  host: "127.0.0.1",
  dialect: "mysql",
});
const db = {};
// 
db.users = require("./models/users")(connection, Sequelize);

module.exports = db;