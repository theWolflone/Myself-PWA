"use strict";
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Nota = require("../models/notas.model");

router.post("/EscribirNota", (req, res) => {
  let body = req.body;
  let nueva_nota = new Nota({
    Descripcion: body.Descripcion,
    Fecha: body.Fecha,
    _idPersona: body._idPersona,
  });

  nueva_nota.save(function (err, notaDB) {
    if (err) {
      res.json({
        success: false,
        msj: "No se pudo guardar la nota, ocurrió el siguiente error: ",
        err,
      });
    } else {
      res.json({
        success: true,
        msj: "Los datos se enviaron de forma exitosa.",
        notaDB,
      });
    }
  });
});

router.get("/BuscarNotasPersona", (req, res) => {
      let params = req.query;
      if (
        params._idPersona != "" &&
        params._idPersona != null &&
        params._idPersona != undefined
      ) {
        Nota.find({ _idPersona: params._idPersona }, (err, _idPersonaDB) => {
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

