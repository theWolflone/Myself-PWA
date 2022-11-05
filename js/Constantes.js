"use strict";

const apiUrl = "http://localhost:3000/api";

function ObtenerEstado(pEstado) {
  switch (Number(pEstado)) {
    case 1:
      return "Activo";
    default:
      return "Inactivo";
  }
}

function SetPersonaConsultada(pDatosPersona) {
  localStorage.setItem("datosPersonaConsultada", JSON.stringify(pDatosPersona));
  console.log(pDatosPersona);
}

function LimpiarLSPersonaConsultada() {
  localStorage.removeItem("datosPersonaConsultada");
}

function ImprimirMsjError(msj) {
  Swal.fire({
    title: "¡Error!",
    background: "#F0FFE2",
    text: msj,
    icon: "error",
    confirmButtonText: "Ok",
    confirmButtonColor: "#1F4650",
  });
}

function ImprimirMsjSuccess(msj) {
  Swal.fire({
    title: "¡Excelente!",
    background: "#F0FFE2",
    text: msj,
    icon: "success",
    confirmButtonText: "Ok",
    confirmButtonColor: "#1F4650",
  });
}

function ResaltarInputInvalido(pInputId) {
  var elementLabel = document.getElementById(pInputId);
  var styleOrigin = elementLabel.style;
  elementLabel.style = "border: 2px solid #cb3715;";
  setTimeout(function () {
    elementLabel.style = styleOrigin;
  }, 5000);
}

function LabelInvalido(plabelID) {
  var obj = document.getElementById(plabelID);
  var orig = obj.style;
  obj.style = "color:red;";

  setTimeout(function () {
    obj.style = orig;
  }, 4000);
}

function InputInvalido(pinputID) {
  var obj = document.getElementById(pinputID);
  var orig = obj.style;
  obj.style = "border: 1px solid red;";

  setTimeout(function () {
    obj.style = orig;
  }, 5000);
}

function TxtInvalido(ptextareaID) {
  var obj = document.getElementById(ptextareaID);
  var orig = obj.style;
  obj.style = "border: 1px solid red;";

  setTimeout(function () {
    obj.style = orig;
  }, 5000);
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
    ].join(":")
  );
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function GetTestsResults() {
  let datosTests=null;
  let testStorage = localStorage.getItem("datosTests");
  if (
    testStorage != null &&
    testStorage != undefined &&
    testStorage != ""
  ) {
    datosTests = JSON.parse(testStorage);
  }
  console.log(datosTests);
  return datosTests;
}

function GetSesionActiva() {
  let datosSesionActiva = null;
  let localStorageData = localStorage.getItem("datosSesionActiva");
  if (
    localStorageData != null &&
    localStorageData != undefined &&
    localStorageData != ""
  ) {
    datosSesionActiva = JSON.parse(localStorageData);
  }
  return datosSesionActiva;
}

// CAMBIAR PARA DESPUÉS
let personaLoggeada = GetSesionActiva();

let btnPerfilNav = document.getElementById("btnPerfilNav");
btnPerfilNav.onclick = function () {
  // GetIdPersona();
  LimpiarLSPersonaConsultada();
  SetPersonaConsultada(personaLoggeada);
  const timeoutId = setTimeout(function () {
    window.location.replace("./profile.html");
  }, 1000);
  console.log(personaLoggeada.persona);
};

const cerrarSesion = document.getElementById("cerrarSesion");
cerrarSesion.addEventListener("click", CerrarSesionActiva);

function GetIdPersona() {
  let _idPersona = personaLoggeada._id;
  // console.log(_idPersona);
  return _idPersona;
}

function GetFecha() {
  let Fecha = Date();
  // console.log(Fecha);
  return Fecha;
}
