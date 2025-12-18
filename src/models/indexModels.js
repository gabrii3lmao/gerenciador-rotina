const Dia = require("./Dia");
const Rotina = require("./Rotina");

Rotina.hasMany(Dia, {
  foreignKey: "rotinaId",
});

Dia.belongsTo(Rotina, {
  foreignKey: "rotinaId",
});
