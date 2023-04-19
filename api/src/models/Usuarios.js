const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        "usuario",
        {
           id: {
              type: DataTypes.UUID,//identificación alfanumérica casi imposible de tener usuarios duplicados
              allowNull: false,
              primaryKey: true,
              defaultValue: DataTypes.UUIDV4//crea automáticamente el ID
           },
           nombre:{
              type: DataTypes.STRING,
              allowNull: false
           },
           apellido:{
              type: DataTypes.STRING,
              allowNull: false
     
           },
           correo:{
              type: DataTypes.STRING,
              unique: true,
           },
           nickname:{
              type: DataTypes.STRING,
              allowNull: false,
              unique: true
           },
           password:{
              type: DataTypes.STRING,
              allowNull: false
           }
        }
     )
}