const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Raza: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Tipo1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Tipo2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // AtaqueEspecial: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    Defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // DefensaEspecial: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    Velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    creado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {timestamps: false});
};