"use strict";
let testsConsultados=GetTestsResults();

console.log(testsConsultados.testResultDB.valoracion);
desplegarTestSaludyEstilodeVida();

function desplegarTestSaludyEstilodeVida() {
    if (testsConsultados.testResultDB.testResult != null || testsConsultados.testResultDB.valoracion != null) {
        document.getElementById('testTitle1Output').value = testsConsultados.testResultDB.nameTest;
        document.getElementById('date_p').value= testsConsultados.testResultDB.Fecha;
        document.getElementById('valoracion').value= testsConsultados.testResultDB.valoracion;
        document.getElementById('resultadoOutput').value=testsConsultados.testResultDB.testResult;

    }else if (testsConsultados.testResultDB.testResult == null || testsConsultados.testResultDB.valoracion == null) {
        document.getElementById('testTitle1Output').value = testsConsultados.testResultDB.nameTest;
        document.getElementById('date_p').value= 'Pendiente';
        document.getElementById('valoracion').value= 'Pendiente';
        document.getElementById('resultadoOutput').value='Pendiente';
    }
    console.log(testsConsultados);
}