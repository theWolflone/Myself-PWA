function show() {
  let msj = 0,
    resu = "",
    option = document.querySelectorAll("input");
  console.log(option);
  for (i = 0; i < option.length; i++) {
    if (option[i].checked == true) {
      num = option[i].value;
      msj = Number(msj) + Number(num);
    }
  }
  if (msj >= 19 && msj <= 36) {
    testSaludResult1 = "Sin síntomas";

    Swal.fire({
      title:
        '<output style="color: #20997B; font-family: Quicksand;" id="testSaludResult1">Sin síntomas</output>',
      background: "#F0FFE2",
      html:
        '<output id="recomendacionTestSalud1" style="display: block;">No presenta síntomas de una mala salud mental, por favor bajo cualquier sospecha acuda con un especialista.</output>' +
        "<br>" +
        '<button onclick="AlmacenarTestSaludResult1(testSaludResult1)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>' +
        "<br>",
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: true,
      icon: "success",
    });
    // resu="<h2 class='swal2-title' id='title'>Sin sintomas</h2>";
    // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">No presenta síntomas de una mala salud mental, por favor bajo cualquier sospecha acuda con un especialista.</div>';
    // res3="success";
  } else if (msj >= 17 && msj <= 18) {
    testSaludResult2 = "Riesgo bajo";

    Swal.fire({
      title:
        '<output style="color: #20997B; font-family: Quicksand;" id="testSaludResult2">Riesgo bajo</output>',
      background: "#F0FFE2",
      html:
        '<output id="recomendacionTestSalud2" style="display: block;">Al parecer presentas una leve afectacción en tu salud mental y bajo cualquier sospecha acuda con un especialista.</output>' +
        "<br>" +
        '<button onclick="AlmacenarTestSaludResult2(testSaludResult2)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>' +
        "<br>",
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: true,
      icon: "warning",
    });
    // resu = "<h2 class='swal2-title' id='title'>Riesgo bajo</h2>";
    // res2 =
    //   '<div class="swal2-html-container" id="recomendacion" style="display: block;">Al parecer presentas una leve afectacción en tu salud mental y bajo cualquier sospecha acuda con un especialista.</div>';
    // res3 = "success";
  } else if (msj >= 15 && msj <= 16) {
    testSaludResult3 = "Riesgo moderado";

    Swal.fire({
      title:
        '<output style="color: #20997B; font-family: Quicksand;" id="testSaludResult3">Riesgo moderado</output>',
      background: "#F0FFE2",
      html:
        '<output id="recomendacionTestSalud3" style="display: block;">Los resultados indican que podrías estar presentando algunos síntomas malestar emocional, en relación con tu salud mental.</output>' +
        "<br>" +
        '<button onclick="AlmacenarTestSaludResult3(testSaludResult3)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>' +
        "<br>",
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: true,
      icon: "warning",
    });
    // resu = "<h2 class='swal2-title' id='title'>Riesgo moderado</h2>";
    // res2 =
    //   '<div class="swal2-html-container" id="recomendacion" style="display: block;">Los resultados indican que podrías estar presentando algunos síntomas malestar emocional, en relación con tu salud mental.</div>';
    // res3 = "success";
  } else if (msj >= 0 && msj <= 14) {
    testSaludResult4 = "Riesgo alto";

    Swal.fire({
      title:
        '<output style="color: #20997B; font-family: Quicksand;" id="testSaludResult4">Riesgo alto</output>',
      background: "#F0FFE2",
      html:
        '<output id="recomendacionTestSalud4" style="display: block;">Los resultados indican que podrías estar presentando un malestar emocional grave, en relación a tu salud mental.</output>' +
        "<br>" +
        '<button onclick="AlmacenarTestSaludResult4(testSaludResult4)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>' +
        "<br>",
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: true,
      icon: "error",
    });
    // resu = "<h2 class='swal2-title' id='title'>Riesgo alto</h2>";
    // res2 =
    //   '<div class="swal2-html-container" id="recomendacion" style="display: block;">Los resultados indican que podrías estar presentando un malestar emocional grave, en relación a tu salud mental.</div>';
    // res3 = "success";
  }
  // showalert(msj,resu);
  // }
  // function  showalert(puntaje,resu){
  //     let boton='<a href="../../tests.html"><button type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Ok</button></a><button type="button" class="swal2-confirm swal2-styled" aria-label style="display: none;">OK</button>';
  //     Swal.fire({
  //         html: resu+res2+boton,
  //         icon: res3,
  //         showConfirmButton: false
  //       })
  // }
}
