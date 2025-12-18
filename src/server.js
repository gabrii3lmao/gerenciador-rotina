const express = require("express");
const PORT = 3000;
const app = express();
const path = require("path");
const routes = require("./routes");
const connection = require("./database/connection");
require('./models/indexModels');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(path.resolve(__dirname, "public"))); // carrega os elementos estaticos (css e js)
app.use(routes); // utiliza as rotas

async function startServer() {
  // transformar em uma função assincronar assim que tiver um Banco de dados
  await connection.authenticate();
  await connection.sync();
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
  });
}

startServer();
