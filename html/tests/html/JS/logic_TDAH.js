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
    if(msj>=5){
        testTDAHResult1 = "Positivo";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testTDAHResult1">Positivo</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestTDAH1" style="display: block;">Es posible que tenga TDAH, recomendamos consultar con un especialista.</output>' + '<br>'+ '<button onclick="AlmacenarTestTDAHResult1(testTDAHResult1)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'success'
          });
        // resu="<h2 class='swal2-title' id='title'>Positivo</h2>";
        // res2= '<div class="swal2-html-container" id="recomendacion" style="display: block;">Es posible que tenga TDAH, recomendamos consultar con un especialista.</div>';
        // res3="success";
    }
    else{
        testTDAHResult2 = "Negativo";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testTDAHResult2">Negativo</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestTDAH2" style="display: block;">No presenta sintomas de TDAH, aunque recomendamos consultar con un especialista bajo cualquier sospecha.</output>' + '<br>'+ '<button onclick="AlmacenarTestTDAHResult2(testTDAHResult2)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'success'
          });
        // resu=
        // "<h2 class='swal2-title' id='title'>Negativo</h2>";
        // res2= '<div class="swal2-html-container" id="recomendacion" style="display: block;">No presenta sintomas de TDAH, aunque recomendamos consultar con un especialista bajo cualquier sospecha.</div>';
        // res3="error";
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