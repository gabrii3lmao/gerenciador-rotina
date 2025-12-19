const { where } = require("sequelize");
const Rotina = require("../models/Rotina");

module.exports = {
  async store(req, res) {
    const { nome } = req.body;

    try {
      const rotina = await Rotina.create({
        nome,
      });
      return res.status(201).json(rotina);
    } catch (error) {
      console.log("Erro ao cadastrar uma rotina: ", error);
      return res
        .status(400)
        .json({ error: "Não foi possível cadastrar uma rotina" });
    }
  },

  async index(req, res) {
    try {
      const rotinas = await Rotina.findAll();
      return res.status(200).json(rotinas);
    } catch (error) {
      console.log("erro ao listar as rotinas: ", error);
      return res.status(400).json({ error: "Erro ao listar rotinas" });
    }
  },

  async show(req, res) {
    const { id } = req.params;
    try {
      const rotina = await Rotina.findByPk(id);
      if (!rotina) {
        return res.status(404).json({ error: "Rotina não encontrada" });
      }

      return res.status(200).json(rotina);
    } catch (error) {
      console.log("Erro ao tentar encontrar a Rotina: ", error);
      return res
        .status(500)
        .json({ error: "não foi possivel encontrar a rotina" });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome } = req.body;

    try {
      const rotina = await Rotina.findByPk(id);
      if (!rotina) {
        return res.status(404).json({ error: "Rotina não encontrado" });
      }

      await rotina.update({ nome });
      return res.status(200).json(rotina);
    } catch (error) {
      console.error("Erro ao atualizar a rotina:", error);
      return res
        .status(500)
        .json({ error: "Falha interna ao atualizar a rotina." });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Rotina.destroy({ where: { id } });
      if (deleted === 0) {
        return res
          .status(404)
          .json({ error: "Rotina não encontrado para exclusão" });
      }
      return res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar a rotina:", error);
      return res
        .status(500)
        .json({ error: "Falha interna ao deletar a rotina." });
    }
  },
};
