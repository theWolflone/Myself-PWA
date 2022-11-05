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
    url: apiUrl + "/MostrarTestResultado",
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

async function GetTestsResultados(p_idPersona) {
  let result = {};
  await axios({
    method: "get",
    url: apiUrl + "/BuscarTestsPersona",
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

function GuardarResultado(pDatosTest) {
  localStorage.setItem("datosTests", JSON.stringify(pDatosTest));
  console.log(pDatosTest);
}
