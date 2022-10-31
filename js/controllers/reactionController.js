'use strict';

let boton = document.getElementById("safeFace");
let feeling = "";

function SetSentimiento() {
  console.log(faces[0]);
  if ((faces[0] = 1)) {
    feeling = "Triste";
  } else if ((faces[1] = 1)) {
    feeling = "Desanimado";
  } else if ((faces[2] = 1)) {
    feeling = "Neutro";
  } else if ((faces[3] = 1)) {
    feeling = "Contento";
  } else if ((faces[4] = 1)) {
    feeling = "Feliz";
  }

  GuardarEmocion();
}

async function GuardarEmocion() {
  let result = await SeleccionarEmocion(feeling, fecha, idPersona);
  console.log(result);
  if (result != null && result.success == true && result.emocionDB != null) {
    ImprimirMsjSuccess(result.msj);
    boton.classList.remove("safemovedface");
    boton.classList.add("safef");
    boton.classList.add("animate__slideInUp");
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
