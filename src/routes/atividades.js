const express = require("express");
const AtividadeController = require("../controllers/AtividadeController");
const routes = express.Router();

// testando o BD
routes.get("/atividades", AtividadeController.index);
routes.post("/atividades", AtividadeController.store);

module.exports = routes;
