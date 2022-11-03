"use strict";

// let guardarTest = document.getElementById("guardarTest");
// guardarTest.addEventListener('click', AlmacenarTestResult)

console.log(idPersona);

async function AlmacenarTestResult1(resultadoTest1) {
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

async function AlmacenarTestResult2(resultadoTest2) {
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

async function AlmacenarTestResult3(resultadoTest3) {
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
