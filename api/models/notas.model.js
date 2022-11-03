"use strict";

const mongoose = require("mongoose");

const schema_notas = new mongoose.Schema({
  Descripcion: { type: String, required: true, unique: false },
  Fecha: { type: Date, required: true, unique: false },
  _idPersona: { type: String, required: true, unique: false },
});

module.exports = mongoose.model("Nota", schema_notas, "notas");
