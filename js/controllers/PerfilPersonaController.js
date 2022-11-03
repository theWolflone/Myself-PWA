'use strict';

let personaConsultada = personaLoggeada;

desplegarDatosConsultadosOutputs();

function desplegarDatosConsultadosOutputs() {
  if (personaConsultada != null) {
    // document.getElementById('PersonaFoto').src = personaConsultada.FotoPerfil;
    document.getElementById('outNombre').value = personaConsultada.Nombre;
    document.getElementById('outApellidos').value = personaConsultada.Apellidos;
    document.getElementById('outSeccion').value = personaConsultada.Seccion;
    document.getElementById('outCarnet').value = personaConsultada.Carnet;
    document.getElementById('outMail').value = personaConsultada.Mail;

  }
}
