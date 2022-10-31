"use strict";

console.log(idPersona);

async function AlmacenarTestResult() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    document.getElementById("testResult").value,
    document.getElementById("valoracion").value,
    fecha,
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
