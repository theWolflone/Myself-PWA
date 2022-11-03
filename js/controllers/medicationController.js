"use strict";

// console.log(idPersona);

function ValidacionesMedicacion() {
  if (ValidarCampos() == false) {
    return false;
  } else {
    AlmacenarMedicacion();
    //     Swal.close();
  }
}

async function AlmacenarMedicacion() {
  let result = await EscribirMedicacion(
    document.getElementById("nombreMedicamento").value,
    document.getElementById("tCada").value,
    document.getElementById("tDurante").value,
    document.getElementById("fechaInicio").value,
    idPersona
  );
  console.log(result);
  if (result != null && result.success == true && result.medicacionDB != null) {
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

async function ListaMedicacion() {
  let result = await GetMedicacion(idPersona);
  if (result != {} && result.resultado == true) {
    let listaMedicacion = result;

    console.log(listaMedicacion);
    return listaMedicacion;
  } else {
    imprimirMsjError(result.msj);
    return;
  }
}
