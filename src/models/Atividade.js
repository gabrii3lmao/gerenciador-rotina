const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class Atividade extends Model {}
Atividade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Atividade",
    timestamps: true,
    tableName: "atividades",
  }
);

module.exports = Atividade;
