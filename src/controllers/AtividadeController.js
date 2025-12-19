const Atividade = require("../models/Atividade");

module.exports = {
  async store(req, res) {
    const { titulo, descricao } = req.body;
    try {
      const atividade = await Atividade.create({
        titulo,
        descricao,
      });
      return res.status(201).json(atividade);
    } catch (error) {
      console.log("erro ao cadastrar atividades: ", error);
      return res.status(400).json({ error: "Falha ao cadastrar o Atividade" });
    }
  },

  async index(req, res) {
    try {
      const atividades = await Atividade.findAll();
      return res.status(200).json({ atividades });
    } catch (error) {
      console.log("erro ao listar atividades: ", error);
      return res.status(400).json({ error: "Erro ao listar atividades" });
    }
  },
};



