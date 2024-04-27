const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Etiqueta = sequelize.define("etiquetas", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idTarea: {
            type: DataTypes.NUMBER
        }
    });
    return Etiqueta;
};