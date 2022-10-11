'use strict';

let personaConsultada = GetPersonaConsultada();
desplegarDatosConsultados();
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let acc = urlParams.get('acc'); //Q = query
if (acc == null) {
  acc = 'D'; //Desplegar  (no se llama desde el CRUD)
}

function desplegarDatosConsultados() {
  if (personaConsultada != null) {
    document.getElementById('PersonaFoto').src = personaConsultada.FotoPerfil;
    document.getElementById('outCedula').value = personaConsultada.Cedula;
    document.getElementById('outNombre').value = personaConsultada.Nombre;
    document.getElementById('outEmail').value = personaConsultada.Correo;
    document.getElementById('outTelefono').value = personaConsultada.Telefono;
  }
}