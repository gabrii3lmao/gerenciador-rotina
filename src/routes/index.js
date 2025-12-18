const express = require('express');
const routes = express.Router();

const atividadeRoute = require('./atividades');
const diaRoute = require('./dias');

routes.use(atividadeRoute);
routes.use(diaRoute);
module.exports = routes;

