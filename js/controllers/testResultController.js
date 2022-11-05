"use strict";

// let guardarTest = document.getElementById("guardarTest");
// guardarTest.addEventListener('click', AlmacenarTestResult)

console.log(idPersona);

async function AlmacenarTestResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    resultadoTest1,
    document.getElementById("recomendacion1").value,
    fecha,
    idPersona
  );
  console.log(resultadoTest1);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);       
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    resultadoTest2,
    document.getElementById("recomendacion2").value,
    fecha,
    idPersona
  );
  console.log(document.getElementById("testResult2").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestResult3() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    resultadoTest3,
    document.getElementById("recomendacion3").value,
    fecha,
    idPersona
  );
  console.log(resultadoTest3,
    );
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestSaludResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testSaludResult1,
    document.getElementById("recomendacionTestSalud1").value,
    fecha,
    idPersona
  );
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestSaludResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testSaludResult2,
    document.getElementById("recomendacionTestSalud2").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud2);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestSaludResult3() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testSaludResult3,
    document.getElementById("recomendacionTestSalud3").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud3);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestSaludResult4() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testSaludResult4,
    document.getElementById("recomendacionTestSalud4").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud4);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestDepresionResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testDepresionResult1,
    document.getElementById("recomendacionTestSalud1").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud1);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestDepresionResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testDepresionResult2,
    document.getElementById("recomendacionTestSalud2").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud2);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestDepresionResult3() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testDepresionResult3,
    document.getElementById("recomendacionTestSalud3").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud3);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestDepresionResult4() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testDepresionResult4,
    document.getElementById("recomendacionTestSalud4").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud4);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestDepresionResult5() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testDepresionResult5,
    document.getElementById("recomendacionTestSalud5").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestSalud5);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestAnsiedadResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testAnsiedadResult1,
    document.getElementById("recomendacionTestAnsiedad1").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestAnsiedad1);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestAnsiedadResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testAnsiedadResult2,
    document.getElementById("recomendacionTestAnsiedad2").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestAnsiedad2);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestAnsiedadResult3() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testAnsiedadResult3,
    document.getElementById("recomendacionTestAnsiedad3").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestAnsiedad1);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestAnsiedadResult4() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testAnsiedadResult4,
    document.getElementById("recomendacionTestAnsiedad4").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestAnsiedad4);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestTDAHResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testTDAHResult1,
    document.getElementById("recomendacionTestTDAH1").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestTDAH1);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestTDAHResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testTDAHResult2,
    document.getElementById("recomendacionTestTDAH2").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestTDAH2);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestTCAResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testTCAResult1,
    document.getElementById("recomendacionTestTCA1").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestTCA1);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestTCAResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testTCAResult2,
    document.getElementById("recomendacionTestTCA2").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestTCA2);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestPrediabetesResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testPrediabetesResult1,
    document.getElementById("recomendacionTestPrediabetes1").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestPrediabetes1);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestPrediabetesResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testPrediabetesResult2,
    document.getElementById("recomendacionTestPrediabetes2").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestPrediabetes2);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestInsomnioResult1() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testInsomnioResult1,
    document.getElementById("recomendacionTestInsomnio1").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestInsomnio1);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function AlmacenarTestInsomnioResult2() {
  let result = await GuardarTestResultado(
    document.getElementById("nameTest").value,
    testInsomnioResult2,
    document.getElementById("recomendacionTestInsomnio2").value,
    fecha,
    idPersona
  );
  console.log(recomendacionTestInsomnio2);
  // console.log(document.getElementById("testResult3").value);
  console.log(result);
  if (result != null && result.success == true) {
    console.log(result);
    ImprimirMsjSuccess();
    setTimeout(() => {
      window.location.replace("../../tests.html");
    }, 2000);
  } else {
    Swal.fire({
      title: "¡Error!",
      background: "#F0FFE2",
      text: result.msj,
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#1F4650",
    });
  }
}

async function ListaTestsResultados() {
  let result = await GetTestsResultados(idPersona);
  if (result != {} && result.resultado == true) {
    let listaTestsResultados = result;

    console.log(listaTestsResultados);
  } else {
    imprimirMsjError(result.msj);
    return;
  }
}
