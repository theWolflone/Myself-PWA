"use strict";

const mongoose = require("mongoose");

const schema_event = new mongoose.Schema({
  Nombre: { type: String, required: false, unique: false },
  Descripcion: { type: String, required: false, unique: false },
  Fecha: { type: Date, required: true, unique: false },
  _idPersona: { type: String, required: true, unique: false },
});

module.exports = mongoose.model("Evento", schema_event, "eventos");
