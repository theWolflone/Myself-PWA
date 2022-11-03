"use strict";

const mongoose = require("mongoose");

const schema_persona = new mongoose.Schema({
  Nombre: { type: String, required: true, unique: false },
  Apellidos: { type: String, required: true, unique: false },
  Sexo: { type: String, required: true, unique: false },
  // nacimiento: {type: Date, required:true, unique: false},
  Edad: { type: Number, required: true, unique: false },
  // identificacion: {type: String, required:true, unique: true},
  Carnet: { type: String, required: true, unique: true },
  Seccion: { type: String, required: true, unique: false },
  // especialidad: {type: String, required:true, unique: false},
  Mail: { type: String, required: true, unique: true },
  Password: { type: String, required: true, unique: true },
  Estado: { type: Number, required: true, unique: false },
  // FotoPerfil: {type: String, required: false, unique: false},
});

module.exports = mongoose.model("Persona", schema_persona, "personas");
