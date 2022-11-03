'use strict';


async function AutenticarPersona(pMail, pPassword) {
  let result = {};
  await axios({
    method: 'get',
    url: apiUrl + '/AutenticarPersona',
    responseType: 'json',
    params: {
      'Mail': pMail,
      'Password': pPassword,
    },
  })
    .then((res) => {
      result = res.data;
      if (
        result != null &&
        result.resultado == true &&
        result.personaDB != null
      ) {
        SetSesionActiva(result.personaDB);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}

function SetSesionActiva(pDatosPerfil) {
      localStorage.setItem('datosSesionActiva', JSON.stringify(pDatosPerfil));
      console.log(pDatosPerfil);
}

function CerrarSesionActiva() {
      localStorage.removeItem('datosSesionActiva');
      localStorage.removeItem('datosPersonaConsultada');
      location.href = 'login.html';
}

  
function GetSesionActiva() {
      let datosSesionActiva = null;
      let localStorageData = localStorage.getItem('datosSesionActiva');
      if (
        localStorageData != null &&
        localStorageData != undefined &&
        localStorageData != ''
      ) {
        datosSesionActiva = JSON.parse(localStorageData);
      }
      return datosSesionActiva;

      
}
