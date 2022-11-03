"use strict";

let notaIdPersona = GetIdPersona();
let fecha = GetFecha();

// console.log(idPersona);
// console.log(fecha);

function ValidacionesNotas() {
  if (ValidarCampos() == false) {
    return false;
  } else {
    AlmacenarNota();
    //     Swal.close();
  }
}

async function AlmacenarNota() {
  let result = await EscribirNota(
    document.getElementById("descripcionNota").value,
    fecha,
    notaIdPersona
  );
  console.log(result);
  if (result != null && result.success == true && result.notaDB != null) {
    console.log(result);
    console.log(result.notaDB);
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

async function ListaNotas() {
      let result = await GetNotas(idPersona);
      if (result != {} && result.resultado == true) {
        let listaNotes = result;
        return listaNotes;
      } else {
        imprimirMsjError(result.msj);
        return;
      }
    }