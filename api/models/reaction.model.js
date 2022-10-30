"use strict";

const mongoose = require("mongoose");

const schema_reaction = new mongoose.Schema({
  Feliz: { type: Boolean, required: false, unique: false },
  Contento: { type: Boolean, required: false, unique: false },
  Neutro: { type: Boolean, required: false, unique: false },
  Desanimado: { type: Boolean, required: false, unique: false },
  Triste: { type: Boolean, required: false, unique: false },
  Fecha: {type: Date, required: true, unique: false},
  _idPersona: { type: String, required: false, unique: true },
});

module.exports = mongoose.model("Reaccion", schema_reaction, "reacciones");
