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

module.exports = router;
