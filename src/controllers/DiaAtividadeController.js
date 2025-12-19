// DiaAtividadeController.js
const Dia = require("../models/Dia");
const Atividade = require("../models/Atividade");
const DiaAtividade = require("../models/DiaAtividade");

module.exports = {
  async store(req, res) {
    try {
      const { data, titulo, descricao } = req.body;

      const [dia] = await Dia.findOrCreate({ where: { data } });

      const atividade = await Atividade.create({
        titulo,
        descricao,
      });

      await DiaAtividade.create({
        diaId: dia.id,
        atividadeId: atividade.id,
        duracaoReal: 0,
        situacao: "nao_iniciada",
        inicioEm: null,
      });

      return res.redirect("back");
    } catch (error) {
      console.error("Erro ao criar atividade do dia:", error);
      return res.status(500).send("Erro ao criar atividade");
    }
  },

  async start(req, res) {
    try {
      const { id } = req.params;
      const atividade = await DiaAtividade.findByPk(id);

      if (atividade.situacao === "em_andamento") {
        return res.redirect("back");
      }

      await DiaAtividade.update(
        {
          situacao: "em_andamento",
          inicioEm: new Date(),
        },
        {
          where: { id },
        }
      );

      return res.redirect("back");
    } catch (error) {
      console.error("Erro ao iniciar atividade:", error);
      return res.status(500).send("Erro ao iniciar atividade");
    }
  },

  async pause(req, res) {
    try {
      const { id } = req.params;
      const atividadeDia = await DiaAtividade.findByPk(id);

      if (!atividadeDia || !atividadeDia.inicioEm) {
        return res.redirect("back");
      }
      const agora = new Date();
      const tempoDecorrido = agora - atividadeDia.inicioEm;

      await atividadeDia.update({
        duracaoReal: atividadeDia.duracaoReal + tempoDecorrido,
        inicioEm: null,
        situacao: "nao_iniciada",
      });
      return res.redirect("back");
    } catch (error) {
      console.error("Erro ao pausar atividade:", error);
      return res.status(500).send("Erro ao pausar atividade");
    }
  },

  async concluir(req, res) {
    try {
      const { id } = req.params;

      await DiaAtividade.update(
        {
          situacao: "concluida",
          inicioEm: null,
        },
        { where: { id } }
      );

      return res.redirect("back");
    } catch (error) {
      console.error("Erro ao concluir atividade:", error);
      return res.status(500).send("Erro ao concluir atividade");
    }
  },
};
