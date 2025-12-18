const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("<h1> Ola mundo </h1>");
})

module.exports = routes;

