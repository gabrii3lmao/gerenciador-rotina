const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class Dia extends Model {}
Dia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    rotinaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Dia",
    tableName: "dias",
    timestamps: true,
  }
);

module.exports = Dia;
