"use strict";

const mongoose = require("mongoose");

const schema_reaction = new mongoose.Schema({
  Sentimiento: { type: String, required: false, unique: false },
  Fecha: {type: Date, required: true, unique: false},
  _idPersona: { type: String, required: false, unique: false },
});

module.exports = mongoose.model("Reaccion", schema_reaction, "reacciones");
