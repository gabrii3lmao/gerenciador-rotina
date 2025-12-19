const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class DiaAtividade extends Model {}

DiaAtividade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    diaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atividadeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    situacao: {
      type: DataTypes.ENUM,
      values: ["nao_iniciada", "em_andamento", "concluida"],
      defaultValue: "nao_iniciada",
      allowNull: false,
    },
    duracaoReal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inicioEm: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "DiaAtividade",
    tableName: "dia_atividades",
    timestamps: false,
  }
);

module.exports = DiaAtividade;
