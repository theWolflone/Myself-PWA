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
    if(msj>=0 && msj<=4){
        testAnsiedadResult1 = "No sufre síntomas";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testAnsiedadResult1">No sufre síntomas</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestAnsiedad1" style="display: block;">No presenta síntomas de ansiedad, por favor bajo cualquier sospecha acuda con un especialista.</output>' + '<br>'+ '<button onclick="AlmacenarTestAnsiedadResult1(testAnsiedadResult1)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'success'
          });
        // resu="<h2 class='swal2-title' id='title'>No sufre sintomas</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">No presenta síntomas de ansiedad, por favor bajo cualquier sospecha acuda con un especialista.</div>';
        // res3="success";
    }
    else if(msj>=5 && msj<=9){
        
        testAnsiedadResult2 = "Ansiedad leve";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testAnsiedadResult2">Ansiedad leve</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestAnsiedad2" style="display: block;">Presta atención a tu salud mental y bajo cualquier sospecha acuda con un especialista.</output>' + '<br>'+ '<button onclick="AlmacenarTestAnsiedadResult2(testAnsiedadResult2)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'error'
          });
        // resu="<h2 class='swal2-title' id='title'>Ansiedad leve</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Presta atención a tu salud mental y bajo cualquier sospecha acuda con un especialista.</div>';
        // res3="success";
    }
    else if(msj>=10 && msj<=14){
        testAnsiedadResult4 = "Ansiedad moderada";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testAnsiedadResult3">Ansiedad moderada</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestAnsiedad3" style="display: block;">Se recomienda un plan de tratamiento y ayuda de especialistas, no es recomendada la automedicación.</output>' + '<br>'+ '<button onclick="AlmacenarTestAnsiedadResult3(testAnsiedadResult3)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'warning'
          });
        // resu="<h2 class='swal2-title' id='title'>Ansiedad moderada</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Se recomienda un plan de tratamiento y ayuda de especialistas, no es recomendada la automedicación.</div>';
        // res3="success";
    }
    else if(msj>=15 && msj<=21){
        testAnsiedadResult4 = "Ansiedad severa";

        Swal.fire({
          
            title: '<output style="color: #20997B; font-family: Quicksand;" id="testAnsiedadResult4">Ansiedad severa</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestAnsiedad4" style="display: block;">Se recomienda un tratamiento activo y controlado, lo antes posible.</output>' + '<br>'+ '<button onclick="AlmacenarTestAnsiedadResult4(testAnsiedadResult4)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'error'
          });
        // resu="<h2 class='swal2-title' id='title'>Ansiedad severa</h2>";
        // res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Se recomienda un tratamiento activo, lo antes posible.</div>';
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