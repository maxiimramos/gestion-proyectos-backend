const { Sequelize, DataTypes } = require('sequelize');
// const User = require("./models/User");

const connection = new Sequelize("gestion_tareas", "root", "password1234", {
  host: "127.0.0.1",
  dialect: "mysql",
});
const db = {};
// 
db.users = require("./models/users")(connection, Sequelize);
db.proyectos = require("./models/proyectos")(connection, Sequelize);
db.tareas = require("./models/tareas")(connection, Sequelize);
db.etiquetas = require("./models/etiquetas")(connection, Sequelize);
/*db.tareas.associate = (models) =>{
  db.tareas.belongsTo(models.proyectos);
}
db.tareas.associate = (models) =>{
  db.proyectos.hasOne(models.tareas);
}*/
module.exports = db;


/**
 * GIT
 * Proyecto =========  [LOCAL] ========================= [REMOTA]
              *   .
              *   . = rama1
              *   . = rama2
              *                                    rama37
              *                                    rama-pruebas-manolo
              *                   
              *              git commit 
              *              git push origin master (rama que sea)
              *              git pull origin master (para actualizar la rama)               
              *              git fetch --all
 */