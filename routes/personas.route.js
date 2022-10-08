'use strict';
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Persona = require('../models/personas.model');
const mailer = require('../templates/registro-template');

router.post('/RegistrarPersona', (req, res) => {
      let body = req.body;
      let nueva_persona = new Persona({
            Nombre: body.Nombre,
            Apellidos: body.Apellidos,
            Sexo: body.Sexo,
            // nacimiento: body.fecha_nacimiento,
            Edad: body.Edad,
            // identificacion: body.identificacion,
            Carnet: body.Carnet,
            Seccion: body.Seccion,
            // especialidad: body.especialidad,
            Mail: body.Mail, 
            Password: body.Password,
            FotoPerfil: body.FotoPerfil,
            Estado: 1,
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
                        mailer.send_mail(personaDB.Nombre, personaDB.Mail);
            
                        }

            
                  }
            );

      


});

router.get('/listarPersonas', (req, res) => {
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


router.post('/modificarPersona', function (req, res) {
      let body = req.body;
      Persona.updateOne({mail: body.Mail},{
            $set: {
                Nombre: body.Nombre,
                Apellidos: body.Apellidos,
                Mail: body.Mail,
                Password: body.Password
            }
      },
      function (error, info) {
            if (error) {
                  res.json({
                        resultado:false,
                        msg: 'No se pudo actualizar el perfil.',
                        err
                  });
            }else{
                  res.json({
                        resultado:true,
                        msj: 'Los datos se actualizaron exitosamente',
                        info,
                  })
            }
      }
      )
})




router.get('/buscarPersonaMail', function (req,res) {

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

router.get('/autenticarPersona', (req, res) => {
      let params = req.query;
      Persona.findOne(
        {
          Mail: params.Mail,
          Password: params.Password,
        },
        (err, personaDB) => {
          if (err) {
            res.json({
              resultado: false,
              msj: 'No se pudo obtener datos: ',
              err,
            });
          } else {
            if (personaDB == null) {
              res.json({
                resultado: false,
                msj: 'Usuario y/o contraseña incorrectos ',
                personaDB,
              });
            } else if (Number(personaDB.Estado) == 0) {
              //inactivo
              res.json({
                resultado: false,
                msj: 'Usuario inactivo, comuníquese con los administradores',
                personaDB,
              });
            } else {
              res.json({
                resultado: true,
                msj: 'Datos coincidentes: ',
                personaDB,
              });
            }
          }
        }
      );
    });







module.exports = router;


