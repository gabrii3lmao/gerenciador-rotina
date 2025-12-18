const Sequelize = require('sequelize');
const path = require('path')
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "/home/gabrii3l/projetos/timer/db/database.db",
});

module.exports = sequelize;