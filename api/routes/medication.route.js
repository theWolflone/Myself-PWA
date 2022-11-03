"use strict";
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Medicacion = require("../models/medication.model");

router.post("/EscribirMedicacion", (req, res) => {
  let body = req.body;
  let nueva_medicacion = new Medicacion({
    NombreMedicamento: body.NombreMedicamento,
    tCada: body.tCada,
    tDurante: body.tDurante,
    fechaInicio: body.fechaInicio,
    _idPersona: body._idPersona,
  });

  nueva_medicacion.save(function (err, medicacionDB) {
    if (err) {
      res.json({
        success: false,
        msj: "No se pudo guardar la medicación, ocurrió el siguiente error: ",
        err,
      });
    } else {
      res.json({
        success: true,
        msj: "Los datos se enviaron de forma exitosa.",
        medicacionDB,
      });
    }
  });
});

router.get("/BuscarMedicacionesPersona", (req, res) => {
  let params = req.query;
  if (
    params._idPersona != "" &&
    params._idPersona != null &&
    params._idPersona != undefined
  ) {
    Medicacion.find({ _idPersona: params._idPersona }, (err, _idPersonaDB) => {
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
    });
  }
});
module.exports = router;
