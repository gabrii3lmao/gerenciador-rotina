const Dia = require("../models/Dia");

module.exports = {
  async store(req, res) {
    const { data, rotinaId } = req.body;

    try {
      const dia = await Dia.create({
        data,
        rotinaId,
      });
      return res.status(201).json(dia);
    } catch (error) {
      console.log("Erro ao cadastrar um dia: ", error);
      return res
        .status(400)
        .json({ error: "Não foi possível cadastrar um dia" });
    }
  },

  async index(req, res) {
    try {
      const dias = await Dia.findAll();
      return res.status(200).json(dias);
    } catch (error) {
      console.log("erro ao listar dias: ", error);
      return res.status(400).json({ error: "Erro ao listar dias" });
    }
  },
};
