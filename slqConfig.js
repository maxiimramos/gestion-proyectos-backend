const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('gestion_tareas', 'root',  'password1234', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

  /*const User = sequelize.define('usuarios', {
    // Model attributes are defined here
    idUsuario: {
      type: DataTypes.NUMBER,
      // autoIncrement: true
      // allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull:false
    },
    contraseña:{
      type: DataTypes.STRING,
      allowNull:false
    },
    fechaRegistro:{
      type: DataTypes.STRING,
      // allowNull:false
    }
  }, {
    // Other model options go here
  });
  module.exports= { User };
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true*/

  module.exports =  {sequelize};