'use strict'

const nodemailer = require('nodemailer');
require('dotenv').config();

this.send_mail = (pnombre, pmail) =>{
      let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                  user: process.env.MAILUSER,
                  pass: process.env.MAILPSSWD
            }
      });

      let mail_options ={
            from : 'Myself',
            to: pmail,
            subject: '¡Bienvenido a Myself! El lugar en donde cuidas de tu salud.',
            html: `
            <table border="0" cellpadding="0" cellspacing="0" width="800px" background-color="#2d3436" bgcolor="#2d3436" style="margin: auto;">
            <tr height="200px">  
                  <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">¡Hola, <span style="color: #20997B">${pnombre}</span>!</h1>
                        <p  style="color: #F0FFE2; text-align:center; font-size: 16px;">
                              Te damos la bienvenida a <span style="color: #177B93;">Myself</span>
                        </p>
                  </td>
                  </tr>
                  <tr bgcolor="#fff">
                  <td style="text-align:center">
                        <p style="color: #000">¡El lugar en el que puedes sanar!</p>
                  </td>
            </tr>
      </table>
            `
      };
      transporter.sendMail(mail_options, (error, info) => {
            if (error) {
                  console.log(error);
            }else{
                  console.log('El correo se envió correctamente ' + info.response);
            }
      });
};

module.export = this;