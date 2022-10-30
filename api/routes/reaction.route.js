"use strict";
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Reaccion = require("../models/reaction.model");

router.post("/IngresarReaccion", (req, res) => {
  let body = req.body;
  let nueva_emocion = new Reaccion({
    Feliz: body.Feliz,
    Contento: body.Contento,
    Neutro: body.Neutro,
    Desanimado: body.Desanimado,
    Triste: body.Triste,
    Fecha: body.Fecha,
    _idPersona: body._idPersona,
  });

  nueva_emocion.save(function (err, emocionDB) {
    if (err) {
      res.json({
        success: false,
        msj: "No se pudo guardar la emoción, ocurrió el siguiente error: ",
        err,
      });
    } else {
      res.json({
        success: true,
        msj: "Los datos se enviaron de forma exitosa.",
        emocionDB,
      });
    }
  });
});

module.exports = router;
