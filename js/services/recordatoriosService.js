"use strict";
async function EscribirRecordatorio(
  pNombreAsunto,
  pDescripcion,
  pFecha,
  p_idPersona
) {
  let result = {};
  await axios({
    method: "post",
    url: apiUrl + "/EscribirRecordatorio",
    responseType: "json",
    data: {
      NombreAsunto: pNombreAsunto,
      Descripcion: pDescripcion,
      Fecha: pFecha,
      _idPersona: p_idPersona,
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

async function GetRecordatorios(p_idPersona) {
  let result = {};
  await axios({
    method: "get",
    url: apiUrl + "/BuscarRecordatoriosPersona",
    responseType: "json",
    params: {
      _idPersona: p_idPersona,
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

function GuardarRecordatorio(pDatosRecordatorio) {
  localStorage.setItem("datosRecordatorios", JSON.stringify(pDatosRecordatorio));
  console.log(pDatosRecordatorio);
}
