"use strict";

const mongoose = require("mongoose");

const schema_testresult = new mongoose.Schema({
  nameTest: { type: String, required: true, unique: false},
  testResult: { type: String, required: true, unique: false },
  valoracion: { type: String, required: true, unique: false },
  Fecha: { type: Date, required: true, unique: false },
  _idPersona: { type: String, required: false, unique: true },
});

module.exports = mongoose.model("ResultadoTest", schema_testresult, "resultadosTests");
