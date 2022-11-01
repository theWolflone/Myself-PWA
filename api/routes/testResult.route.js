"use strict";
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const ResultadoTest = require("../models/testResult.model");

router.post("/MostrarResultado", (req, res) => {
  let body = req.body;
  let nuevo_resultado = new ResultadoTest({
    nameTest: body.nameTest,
    testResult: body.testResult,
    valoracion: body.valoracion,
    Fecha: body.Fecha,
    _idPersona: body._idPersona,
  });

  nuevo_resultado.save(function (err, testResultDB) {
    if (err) {
      res.json({
        success: false,
        msj: "No se pudo guardar el resultado, ocurrió el siguiente error: ",
        err,
      });
    } else {
      res.json({
        success: true,
        msj: "Los datos se enviaron de forma exitosa.",
        testResultDB,
      });
    }
  });
});

module.exports = router;
