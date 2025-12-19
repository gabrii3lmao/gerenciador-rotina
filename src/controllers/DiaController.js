const Dia = require("../models/Dia");

module.exports = {
  async show(req, res) {
    try {
      const { data } = req.params;

      const [dia] = await Dia.findOrCreate({
        where: { data },
      });

      return res.status(200).json(dia);
    } catch (error) {
      console.log("Erro ao buscar/criar dia:", error);
      return res.status(500).json({ error: "Erro ao buscar o dia" });
    }
  },
};
