btnIngresar.addEventListener('click', Validaciones);

function Validaciones() {
    if (ValidarLogin() == false) {
      return false;
    } else {
      /*********************************************************************/
      IniciarSesion();
      /*********************************************************************/
    }
  }

  async function IniciarSesion() {
    let result = await AutenticarPersona(
      document.getElementById('txtCorreo').value,
      document.getElementById('txtContra').value
    );
    if (result != null && result.resultado == true && result.personaDB != null) {
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

  function CerrarSesion() {
    CerrarSesionActiva();
    location.href = 'login.html';
  }