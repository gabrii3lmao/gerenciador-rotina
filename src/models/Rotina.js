const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class Rotina extends Model {}

Rotina.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streak: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Rotina",
    tableName: "rotinas",
  }
);

module.exports = Rotina;
