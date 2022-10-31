'use strict';

async function EscribirNota(pDescripcion, pFecha, p_idPersona) {
  let result = {};
  await axios({
      method: "post",
      url: apiUrl + "/EscribirNota",
      responseType: "json",
      data: {
        Descripcion: pDescripcion,
        Fecha: pFecha,
        _idPersona: p_idPersona
      },
    })
    .then((res) => {
      result = res.data;
      if (result != null && result.success == true) {
        GuardarNota(result);
      }
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}

async function EscribirRecordatorio(pNombre, pDescripcion, pFecha, p_idPersona) {
      let result = {};
      await axios({
          method: "post",
          url: apiUrl + "/EscribirRecordatorio",
          responseType: "json",
          data: {
            Nombre: pNombre,
            Descripcion: pDescripcion,
            Fecha: pFecha,
            _idPersona: p_idPersona
          },
        })
        .then((res) => {
          result = res.data;
          if (result != null && result.success == true) {
            GuardarRecordatorio(result);
          }
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
      return result;
    }


function GuardarNota(pDatosEvento) {
      localStorage.setItem("datosEventos", JSON.stringify(pDatosEvento));
      console.log(pDatosEvento);
}


function GuardarRecordatorio(pDatosEvento) {
      localStorage.setItem("datosEventos", JSON.stringify(pDatosEvento));
      console.log(pDatosEvento);
}


