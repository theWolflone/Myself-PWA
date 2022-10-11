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