"use strict";
async function GuardarTestResultado(
  pNameTest,
  pTestResult,
  pValoracion,
  pFecha,
  p_idPersona
) {
  let result = {};
  await axios({
    method: "post",
    url: apiUrl + "/MostrarResultado",
    responseType: "json",
    data: {
      nameTest: pNameTest,
      testResult: pTestResult,
      valoracion: pValoracion,
      Fecha: pFecha,
      _idPersona: p_idPersona,
    },
  })
    .then((res) => {
      result = res.data;
      if (result != null && result.success == true) {
        GuardarResultado(result);
      }
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}

function GuardarResultado(pDatosTest) {
  localStorage.setItem("datosTests", JSON.stringify(pDatosTest));
  console.log(pDatosTest);
}
