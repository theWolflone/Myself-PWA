'use strict';


async function ModificarPersona(
      p_id,
      pNombre,
      pApellidos,
      pMail,
      pPassword,
      // pFotoPerfil,
    ) {
      let result = {};
      await axios({
        method: 'post',
        url: apiUrl + '/modificarPersona',
        responseType: 'json',
        data: {
          '_id': p_id,
          'Nombre': pNombre,
          'Apellidos': pApellidos,
          'Mail': pMail,
          'Password': pPassword,
          // 'FotoPerfil': pFotoPerfil,
        },
      })
        .then(async (res) => {
          result = res.data;
          if (
            result != null &&
            result.resultado == true
          ) {
            let personaDB = await BuscarPersona(pMail);
            SetSesionActiva(personaDB);

            let personaLoggeada = GetSesionActiva();
            LimpiarLSPersonaConsultada();
            SetPersonaConsultada(personaLoggeada);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return result;
    }

    async function BuscarPersona(pMail) {
      let result = {};
      await axios({
        method: 'get',
        url: apiUrl + '/buscarPersonaMail',
        responseType: 'json',
        params: {
          'Mail': pMail,
        },
      })
        .then((res) => {
          result = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return result;
    }
    
    
          
    
    function LimpiarLSPersonaConsultada() {
      localStorage.removeItem('datosPersonaConsultada');
    }
    
    function SetPersonaConsultada(pDatosPersona) {
      localStorage.setItem('datosPersonaConsultada', JSON.stringify(pDatosPersona));
      console.log(pDatosPersona);
    }
    
    function SetSesionActiva(pDatosPerfil) {
      localStorage.setItem('datosSesionActiva', JSON.stringify(pDatosPerfil));
      console.log(pDatosPerfil);
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