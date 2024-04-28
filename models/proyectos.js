const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Proyecto = sequelize.define("proyectos", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idUsuario: {
            type: DataTypes.NUMBER

        },

        fechaInicio: {
            type: DataTypes.STRING,
        //    allowNull: false,
        },
        fechaFin: {
            type: DataTypes.STRING,
        //    allowNull: false,
        },
    });
    return Proyecto;
};