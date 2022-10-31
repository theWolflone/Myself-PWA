'use strict';

btnModificar.addEventListener('click', ValidacionesModificar);

let personaConsultada = personaLoggeada.persona[0];
desplegarDatosConsultados();
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);





function ValidacionesModificar() {
  if (ValidarCampos() == false) {
      return false;
  } else {
        ActualizarPersona();
    }
  
  }  


async function ActualizarPersona() {
  console.log(personaConsultada._id);
  let result = await ModificarPersona(
    personaConsultada._id,
    document.getElementById('inputNombre').value,
    document.getElementById('inputApellidos').value,
    document.getElementById('inputMail').value,
    document.getElementById('inputPassword').value,
    // personaConsultada.Estado

  );


  if (result != null && result.resultado == true) {
    ImprimirMsjSuccess(result.msj);
    setTimeout(()=>{window.location.replace('./profile.html')},
      2000
    )
  }else{
    ImprimirMsjError(result.msj);
  }

}



function desplegarDatosConsultados() {
  if (personaConsultada != null) {
    // document.getElementById('PersonaFoto').src = personaConsultada.FotoPerfil;
    document.getElementById('inputNombre').value = personaConsultada.Nombre;
    document.getElementById('inputApellidos').value = personaConsultada.Apellidos;
    document.getElementById('inputMail').value = personaConsultada.Mail;
    document.getElementById('inputPassword').value = personaConsultada.Password;

  }
}