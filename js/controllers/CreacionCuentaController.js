'use strict';

let personaConsultada = personaLoggeada;
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let acc = urlParams.get('acc'); //M = Modificar C=Crear nuevo(CrudPersonas.html)
if (acc == null) {
  acc = 'N'; //Nuevo  (no se llama desde el CRUD)
}

desplegarInputsConsultados();

btnRegistrar.addEventListener('click', Validaciones);


function Validaciones() {
  if (ValidarCampos() == false) {
    return false;
  } else {
      CrearPersona();
    }

  }


  function ValidacionesModificar() {
    if (ValidarCampos() == false) {
        return false;
    } else {
          ActualizarPersona();
      }
    
    }  


  async function CrearPersona() {
    let result = await RegistrarPersona(
      document.getElementById('txtNombre').value,
      document.getElementById('txtApellidos').value,
      document.getElementById('txtSexo').value,
      document.getElementById('txtEdad').value,
      document.getElementById('txtCarnet').value,
      document.getElementById('txtSeccion').value,
      document.getElementById('txtMail').value,
      document.getElementById('txtPassword').value,
    );
    console.log(result);
    if (result != null && result.success == true && result.personaDB != null) {
      ImprimirMsjSuccess(result.msj);
      Redireccionar(result.personaDB);
    } else {
      Swal.fire({
        title: '¡Error!',
        background: '#F0FFE2',
        text: result.msj,
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#1F4650',
      });
    }

      
  }

  function Redireccionar(pPersonaDB) {
    setTimeout(()=>{location.href = 'home.html'},
    3000
  )
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
      personaConsultada = GetPersonaConsultada();
      document.getElementById('txtNombre').value = personaConsultada.Nombre;
      document.getElementById('txtApellidos').value = personaConsultada.Apellidos;
      document.getElementById('txtCarnet').value = personaConsultada.Carnet;
      document.getElementById('txtSeccion').value = personaConsultada.Seccion;
      document.getElementById('txtMail').value = personaConsultada.Mail;
    }

    function desplegarInputsConsultados() {
      if (personaConsultada != null) {
        // document.getElementById('PersonaFoto').src = personaConsultada.FotoPerfil;
        document.getElementById('inputNombre').value = personaConsultada.Nombre;
        document.getElementById('inputApellidos').value = personaConsultada.Apellidos;
        document.getElementById('inputMail').value = personaConsultada.Mail;
        document.getElementById('inputPassword').value = personaConsultada.Password;
    
      }
    }