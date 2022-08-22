'use strict';
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Persona = require('../models/personas.model');
const mailer = require('../templates/registro-template');

router.post('/registrar-persona', (req, res) => {
      let body = req.body;
      let nueva_persona = new Persona({
            nombre: body.nombre,
            apellidos: body.apellidos,
            sexo: body.sexo,
            // nacimiento: body.fecha_nacimiento,
            // identificacion: body.identificacion,
            edad: body.edad,
            carnet: body.carnet,
            seccion: body.seccion,
            // especialidad: body.especialidad,
            // telefonos: body.telefono,
            mail: body.mail, 
            password: body.password,
            estado: 'activo'
      });

      nueva_persona.save(
            function(err, personaDB) {
                  if (err) {
                        res.json({
                              success: false,
                              msj: 'No se pudo registrar a la persona, ocurrió el siguiente error: ',
                              err
                        });
                  }else{
                        res.json({
                              success: true,
                              msj: 'Los datos se enviaron de forma exitosa',
                              personaDB
                  
                        });
                        mailer.send_mail(personaDB.nombre, personaDB.mail);
            
                        }

            
                  }
            );

      


});

// router.post('/agregar-telefono', function (req,res) {
//       Persona.update({ _id: req.body._id}, {
//             $push: {
//                 'telefonos': {
//                   numero: req.body.numero,
//                   descripcion: req.body.descripcion
//                 }
//             }
//       },
//       function (error) {
//             if (error) {
//                   return res.json({
//                         success: false,
//                         msj: 'No se pudo agregar el teléfono',
//                         err
//                   });
//             } else {
//                   return res.json({
//                         success: true,
//                         msj:'Se agregó correctamente el teléfono.'
//                   });
//             }
//       }
//       )
// });


router.post('/modificar-persona', function (req, res) {
      let body = req.body;
      Persona.updateOne({mail: body.mail},{
            $set: {
                nombre: body.nombre,
                seccion: body.seccion,
                especialidad: body.especialidad,
            }
      },
      function (error, info) {
            if (error) {
                  res.json({
                        resultado:false,
                        msg: 'No se pudo modificar el perfil.',
                        err
                  });
            }else{
                  res.json({
                        resultado:true,
                        info:info
                  })
            }
      }
      )
})


router.get('/listar-personas', (req, res) => {
      Persona.find((err, lista_personas)=>{
            if (err) {
                  res.json({
                        resultado: false,
                        msj: 'No se pudieron listar las personas, ocurrió el siguiente error: ',
                        err
                  });
            }else{
                  res.json({
                        resultado: true,
                        msj: 'Las personas se listaron adecuadamente',
                        lista_personas
                  });
            }
      });
});

router.get('/buscar-persona-mail', function (req,res) {

      let mail = req.query.mail;

      Persona.find({ mail: mail}, function (err, contactoDB) {
            if (err) {
                  return res.json({
                        success: false,
                        msj: 'No se encontró ninguna persona con ese correo',
                        err
                  });
            } else {
                  return res.json({
                        success: true,
                        persona: contactoDB
                  });
            }
      })
      
});







module.exports = router;


