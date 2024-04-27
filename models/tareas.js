const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define("tareas", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaLimite: {
            type: DataTypes.STRING,
        //    allowNull: false,
        },
        idProyecto: {
            type: Number,
            allowNull: false
        }
    });
    
    return Tarea;
};