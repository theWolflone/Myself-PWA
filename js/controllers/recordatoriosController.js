"use strict";

let idPersona = GetIdPersona();
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let acc = urlParams.get("acc"); //M = Modificar C=Crear nuevo(CrudPersonas.html)
if (acc == null) {
  acc = "N"; //Nuevo  (no se llama desde el CRUD)
}

function ValidacionesRecordatorios() {
  if (ValidarCampos() == false) {
    return false;
  } else {
    AlmacenarRecordatorio();
    //     Swal.close();
  }
}

async function AlmacenarRecordatorio() {
  let result = await EscribirRecordatorio(
    document.getElementById("nombreRecordatorio").value,
    document.getElementById("descripcionRecordatorio").value,
    document.getElementById("fechaRecordatorio").value,
    idPersona
  );
  console.log(result);
  if (
    result != null &&
    result.success == true &&
    result.recordatorioDB != null
  ) {
    ImprimirMsjSuccess(result.msj);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function ListaRecordatorios() {
  let result = await GetRecordatorios(idPersona);
  if (result != {} && result.resultado == true) {
    let listaRecordatorios = result;

    return listaRecordatorios;
  } else {
    imprimirMsjError(result.msj);
    return;
  }
}
