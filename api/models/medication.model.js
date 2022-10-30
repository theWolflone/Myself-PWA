"use strict";

const mongoose = require("mongoose");

const schema_medication = new mongoose.Schema({
  NombreMedicamento: { type: String, required: true, unique: false },
  tCada: { type: Number, required: true, unique: false },
  tDurante: { type: Number, required: true, unique: false },
  fechaInicio: { type: Date, required: true, unique: true },
  _idPersona: { type: String, required: false, unique: true },
});

module.exports = mongoose.model(
  "Medicacion",
  schema_medication,
  "medicaciones"
);
