function show(){
    let msj=0, resu="",
        option=document.querySelectorAll("input");
    console.log(option);
    for(i=0;i<option.length;i++){
        if(option[i].checked==true){
            num=option[i].value;
            msj=Number(msj)+Number(num);
        }
    }
    if(msj>=3){
        testTCAResult1 = "Es probable que tenga un TCA";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testTCAResult1">Es posible que tenga un TCA</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestTCA1" style="display: block;">Es posible que tenga un TCA, recomendamos consultar con un especialista.</output>' + '<br>'+ '<button onclick="AlmacenarTestTCAResult1(testTCAResult1)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'success'
          });
        // resu="<h2 class='swal2-title' id='title'>Es probable que tenga un TCA</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Es posible que tenga un TCA, recomendamos consultar con un especialista.</div>';
        // res3="success";
    }
    else{
        testTCAResult2 = "Poco riesgo";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testTCAResult2">Poco riesgo</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestTCA2" style="display: block;">No presenta factores de riesgo , aunque recomendamos consultar con un especialista bajo cualquier sospecha.</output>' + '<br>'+ '<button onclick="AlmacenarTestTCAResult2(testTCAResult2)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'success'
          });
        // resu="<h2 class='swal2-title' id='title'>Poco riesgo</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">No presenta factores de riesgo , aunque recomendamos consultar con un especialista bajo cualquier sospecha.</div>';
        // res3="error";
    }
    // showalert(msj,resu);
    }
    // function  showalert(puntaje,resu){
    //     let boton='<a href="../../tests.html"><button type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Ok</button></a><button type="button" class="swal2-confirm swal2-styled" aria-label style="display: none;">OK</button>';
    // Swal.fire({
    //     html: resu+res2+boton,
    //     icon: res3,
    //     showConfirmButton: false
    //   })
    // }