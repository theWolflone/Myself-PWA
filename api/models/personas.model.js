'use strict';

const mongoose = require('mongoose');

const schema_persona = new mongoose.Schema({
      nombre: {type: String, required:true, unique: false},
      apellidos: {type: String, required:true, unique: false},
      sexo: {type: String, required:true, unique: false},
      edad: {type: Number, required:true, unique: false},
      carnet: {type: String, required:true, unique: true},
      seccion: {type: String, required:true, unique: false},
      mail:{type: String, required: true, unique: true},
      password:{type: String, required: true, unique: true},
      estado: String
      
})

module.exports = mongoose.model('Persona', schema_persona, 'personas');



