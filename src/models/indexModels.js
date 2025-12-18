const Dia = require("./Dia");
const Rotina = require("./Rotina");
const Atividade = require("./Atividade");
const DiaAtividade = require("./DiaAtividade");
const RotinaAtividade = require("./RotinaAtividade");

Rotina.hasMany(Dia, {
  // rotina tem tantos dias
  foreignKey: "rotinaId",
});

Dia.belongsTo(Rotina, {
  // um dia pertence à uma rotina
  foreignKey: "rotinaId",
});

// Rotina <-> Atividade
Rotina.belongsToMany(Atividade, {
  through: RotinaAtividade,
  foreignKey: "rotinaId",
});

Atividade.belongsToMany(Rotina, {
  through: RotinaAtividade,
  foreignKey: "atividadeId",
});

// Dia <-> Atividade
Dia.belongsToMany(Atividade, {
  through: DiaAtividade,
  foreignKey: "diaId",
});

Atividade.belongsToMany(Dia, {
  through: DiaAtividade,
  foreignKey: "atividadeId",
});
