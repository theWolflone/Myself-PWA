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

router.get("/BuscarTestsPersona", (req, res) => {
  let params = req.query;
  if (
    params._idPersona != "" &&
    params._idPersona != null &&
    params._idPersona != undefined
  ) {
    ResultadoTest.find(
      { _idPersona: params._idPersona },
      (err, _idPersonaDB) => {
        if (err) {
          res.json({
            resultado: false,
            msj: "No se pudo encontar la información",
            err,
          });
        } else {
          res.json({
            resultado: true,
            msj: "La información se encontró con éxito",
            _idPersonaDB,
          });
        }
      }
    );
  }
});

module.exports = router;
