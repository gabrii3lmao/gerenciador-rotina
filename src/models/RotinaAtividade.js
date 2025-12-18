const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class RotinaAtividade extends Model {}

RotinaAtividade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    rotinaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atividadeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ordem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duracaoPlanejada: {
      type: DataTypes.INTEGER, // minutos / segundos,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "RotinaAtividade",
    tableName: "rotina_atividades",
    timestamps: false,
  }
);

module.exports = RotinaAtividade;
