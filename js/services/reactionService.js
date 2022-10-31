"use strict";

async function SeleccionarEmocion(
  pSentimiento,
  pFecha,
  p_idPersona
) {
  let result = {};
  await axios({
    method: "post",
    url: apiUrl + "/IngresarReaccion",
    responseType: "json",
    data: {
      Sentimiento: pSentimiento,
      Fecha: pFecha,
      _idPersona: p_idPersona,
    },
  })
    .then((res) => {
      result = res.data;
      if (result != null && result.success == true) {
        AlmacenarEmocion(result);
      }
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}

function AlmacenarEmocion(pDatosEmocion) {
  localStorage.setItem("datosEmociones", JSON.stringify(pDatosEmocion));
  console.log(pDatosEmocion);
}
