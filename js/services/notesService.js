"use strict";

async function EscribirNota(pDescripcion, pFecha, p_idPersona) {
  let result = {};
  await axios({
    method: "post",
    url: apiUrl + "/EscribirNota",
    responseType: "json",
    data: {
      Descripcion: pDescripcion,
      Fecha: pFecha,
      _idPersona: p_idPersona,
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

async function GetNotas(p_idPersona) {
  let result = {};
  await axios({
    method: "get",
    url: apiUrl + "/BuscarNotasPersona",
    responseType: "json",
    params: {
      _idPersona: p_idPersona,
    }
  })
    .then((res) => {
      result = res.data;
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
