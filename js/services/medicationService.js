'use strict';

async function EscribirMedicacion(
  pNombreMedicamento,
  ptCada,
  ptDurante,
  pfechaInicio,
  p_idPersona
) {
  let result = {};
  await axios({
    method: "post",
    url: apiUrl + "/EscribirMedicacion",
    responseType: "json",
    data: {
      NombreMedicamento: pNombreMedicamento,
      tCada: ptCada,
      tDurante: ptDurante,
      fechaInicio: pfechaInicio,
      _idPersona: p_idPersona,
    },
  })
    .then((res) => {
      result = res.data;
      if (result != null && result.success == true) {
        GuardarMedicacion(result);
      }
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}

function GuardarMedicacion(pDatosMedicacion) {
  localStorage.setItem("datosMedicacion", JSON.stringify(pDatosMedicacion));
  console.log(pDatosMedicacion);
}
