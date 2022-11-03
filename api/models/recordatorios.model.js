"use strict";

const mongoose = require("mongoose");

const schema_recordatorios = new mongoose.Schema({
  NombreAsunto: { type: String, required: true, unique: false },
  Descripcion: { type: String, required: true, unique: false },
  Fecha: { type: Date, required: true, unique: false },
  _idPersona: { type: String, required: true, unique: false },
});

module.exports = mongoose.model("Recordatorio", schema_recordatorios, "recordatorios");
