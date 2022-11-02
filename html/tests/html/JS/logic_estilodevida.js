
function show(){
    let msj=0,
        option=document.querySelectorAll("input");
    console.log(option);
    for(i=0;i<option.length;i++){
        if(option[i].checked==true){
            num=option[i].value;
            msj=Number(msj)+Number(num);
        }
    }
    if(msj>17 && msj<=33){
        Swal.fire({
            title: '<h2 style="color: #20997B; font-family: Quicksand;" id="testResult1">BAJO</h2>',
            background: "#F0FFE2",
            html:
              '<div id="recomendacion1" style="display: block;">Es importante que introduzcas cambios para conseguir unos niveles de salud adecuados. Existen varias áreas que deberías revisar con el fin de incrementar los niveles de salud que alcanzas actualmente.</div>' + '<button type="button" onclick="AlmacenarTestResult1()" style="display: absolute; background-color: rgb(32, 153, 123);">Ok</button>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'error'
          });
        // resu="<h2 class='swal2-title' id='testResult'>Bajo</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Es importante que introduzcas cambios para conseguir unos niveles de salud adecuados. Existen varias áreas que deberías revisar con el fin de incrementar los niveles de salud que alcanzas actualmente.</div>';
        // res3="success";
        }else if(msj>=34 && msj<=53){
        Swal.fire({
            title: '<h2 style="color: #20997B; font-family: Quicksand;" id="testResult2">MEDIO</h2>',
            background: "#F0FFE2",
            html:
              '<div class="swal2-html-container" id="recomendacion2" style="display: block;">Tienes algunos hábitos saludables en tu estilo de vida pero te convendría realizar algunos ajustes con el objetivo de mejorar aun más tu salud e incrementar tus resultados.</div>'+ '<a href="../../tests.html"><button onclick="AlmacenarTestResult2()" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Ok</button></a><button type="button" class="swal2-confirm swal2-styled" aria-label style="display: none;">OK</button>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'warning'
          });
        // resu="<h2 class='swal2-title' id='testResult'>Medio</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Tienes algunos hábitos saludables en tu estilo de vida pero te convendría realizar algunos ajustes con el objetivo de mejorar aun más tu salud e incrementar tus resultados.</div>';
        // res3="success";
    }
    else{
        Swal.fire({
            title: '<h2 style="color: #20997B; font-family: Quicksand;" id="testResult3">¡BUENO!</h2>',
            background: "#F0FFE2",
            html:
              '<div class="swal2-html-container" id="recomendacion3" style="display: block;">Eres una persona que se cuida y que posee un estilo de vida saludable. ¡Sigue así!</div>'+ '<a ><button onclick="AlmacenarTestResult3()" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Ok</button></a><button type="button" class="swal2-confirm swal2-styled" aria-label style="display: none;">OK</button>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'success'
          });
        // resu="<h2 class='swal2-title' id='testResult'>¡Bueno!</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Eres una persona que se cuida y que posee un estilo de vida saludable. ¡Sigue así!</div>';
        // res3="success";
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
}
