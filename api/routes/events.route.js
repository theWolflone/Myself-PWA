"use strict";
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Evento = require("../models/events.model");

router.post("/EscribirNota", (req, res) => {
  let body = req.body;
  let nueva_nota = new Evento({
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

router.post("/EscribirRecordatorio", (req, res) => {
  let body = req.body;
  let nuevo_recordatorio = new Evento({
    Nombre: body.Nombre,
    Descripcion: body.Descripcion,
    Fecha: body.Fecha,
    _idPersona: body._idPersona,
  });

  nuevo_recordatorio.save(function (err, recordatorioDB) {
    if (err) {
      res.json({
        success: false,
        msj: "No se pudo guardar el recordatorio, ocurrió el siguiente error: ",
        err,
      });
    } else {
      res.json({
        success: true,
        msj: "Los datos se enviaron de forma exitosa.",
        recordatorioDB,
      });
    }
  });
});

router.get("/BuscarEventosPersona", (req, res) => {
  let params = req.query;
  if (
    params._idPersona != "" &&
    params._idPersona != null &&
    params._idPersona != undefined
  ) {
    Evento.find({ _idPersona: params._idPersona }, (err, _idPersonaDB) => {
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
