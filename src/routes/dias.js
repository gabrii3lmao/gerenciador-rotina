const express = require("express");
const DiaController = require("../controllers/DiaController");
const routes = express.Router();

routes.get("/dias", DiaController.index);
routes.post("/dias", DiaController.store);

module.exports = routes;
