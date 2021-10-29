const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    height_min: {
      type: DataTypes.INTEGER,
      
    },
    height_max: {
      type: DataTypes.INTEGER,
      
    },
    weight_min: {
      type: DataTypes.INTEGER,
      
    },
    weight_max: {
      type: DataTypes.INTEGER,
      
    },
    life_span: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    }
  },
   {timestap: true}
  );
};
