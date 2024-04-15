const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("usuarios", {
    // Model attributes are defined here
    /*idUsuario: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      allowNull: false
    },*/
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    fechaRegistro:{
      type: DataTypes.STRING,
      // allowNull:false
    },
  });
  return User;
};