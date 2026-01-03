const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: { type: String },
  durationMin: { type: Number },
});

const daySchema = new mongoose.Schema({
  weekday: {
    type: String,
    enum: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ],
    unique: true,
    required: true,
  },
  activities: [activitySchema],
});

module.exports = mongoose.model("Day", daySchema);
