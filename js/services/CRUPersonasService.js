'use strict';

function SetPersonaConsultada(pDatosPersona) {
  localStorage.setItem('datosPersonaConsultada', JSON.stringify(pDatosPersona));
  console.log(pDatosPersona);
}

function LimpiarLSPersonaConsultada() {
  localStorage.removeItem('datosPersonaConsultada');
}


function GetPersonaConsultada() {
  let datosPersonaConsultada = null;
  let localStorageData = localStorage.getItem('datosPersonaConsultada');
  if (
    localStorageData != null &&
    localStorageData != undefined &&
    localStorageData != ''
  ) {
    datosPersonaConsultada = JSON.parse(localStorageData);
  }
  return datosPersonaConsultada;
}

function GetSesionActiva() {
  let datosSesionActiva = null;
  let localStorageData = localStorage.getItem('datosSesionActiva');
  if (
    localStorageData != null &&
    localStorageData != undefined &&
    localStorageData != ''
  ) {
    datosSesionActiva = JSON.parse(localStorageData);
  }
  return datosSesionActiva;

  
}

