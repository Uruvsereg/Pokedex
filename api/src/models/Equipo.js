const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        "equipo",
        {
            id: {
               type: DataTypes.UUID,//identificación alfanumérica casi imposible de tener usuarios duplicados
               allowNull: false,
               primaryKey: true,
               defaultValue: Sequelize.UUIDV4//crea automáticamente el ID
            },
            nombre:{
               type: DataTypes.STRING,
               allowNull: false
            },
            Raza:{
               type: DataTypes.STRING,
               allowNull: false
            },
            Tipo:{
               type: DataTypes.STRING,
               allowNull: false
            },
        }
     )
}