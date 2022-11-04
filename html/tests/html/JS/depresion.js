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
        testDepresionResult1 = "Nada o mínimo";
        Swal.fire({
            title: '<output style="color: #20997B; font-family: "Quicksand";" id="testResult1">Nada o mínimo</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestSalud1" style="display: block;">No presenta síntomas de depresión, por favor bajo cualquier sospecha acuda con un especialista.</output>'+ '<br>'+ '<button onclick="AlmacenarTestDepresionResult1(testDepresionResult1)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'success'
          });
        // resu="<h2 class='swal2-title' id='title'>Nada o mínimo</h2>";
        // res2=
        // '<div class="swal2-html-container" id="recomendacion" style="display: block;">No presenta síntomas de depresión, por favor bajo cualquier sospecha acuda con un especialista.</div>';
        // res3="success";
    }
    else if(msj>=5 && msj<=9){
        testDepresionResult2 = "Depresión leve";
        Swal.fire({
            title: '<output style="color: #20997B; font-family: "Quicksand";" id="testResult2">Depresión leve</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestSalud2" style="display: block;">Presta atención a tu salud mental y bajo cualquier sospecha acuda con un especialista.</output>'+ '<br>'+ '<button onclick="AlmacenarTestDepresionResult2(testDepresionResult2)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'warning'
          });

        // resu="<h2 class='swal2-title' id='title'>Depresión leve</h2>";
        // res2=
        // '<div class="swal2-html-container" id="recomendacion" style="display: block;">Presta atención a tu salud mental y bajo cualquier sospecha acuda con un especialista.</div>';
        // res3="success";
    }
    else if(msj>=10 && msj<=14){
        testDepresionResult3 = "Depresión moderada";
        Swal.fire({
            title: '<output style="color: #20997B; font-family: "Quicksand";" id="testDepresionResult3">Depresión moderada</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestSalud3" style="display: block;">Se recomienda un plan de tratamiento y ayuda de especialistas, no es recomendada la automedicación.</output>'+ '<br>'+ '<button onclick="AlmacenarTestDepresionResult3(testDepresionResult3)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'warning'
          });
        // resu="<h2 class='swal2-title' id='title'>Depresión moderada</h2>";
        // res2=
        // '<div class="swal2-html-container" id="recomendacion" style="display: block;">Se recomienda un plan de tratamiento y ayuda de especialistas, no es recomendada la automedicación.</div>';
        // res3="success";
    }
    else if(msj>=15 && msj<=19){
        testDepresionResult4 = "Depresión moderada-grave";
        Swal.fire({
            title: '<output style="color: #20997B; font-family: "Quicksand";" id="testDepresionResult4">Depresión moderada-grave</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestSalud4" style="display: block;">Se recomienda un tratamiento activo y controlado por un especialisat, lo antes posible.</output>'+ '<br>'+ '<button onclick="AlmacenarTestDepresionResult4(testDepresionResult4)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'error'
          });
        // resu="<h2 class='swal2-title' id='title'>Depresión moderada-grave</h2>";
        // res2=
        // '<div class="swal2-html-container" id="recomendacion" style="display: block;">Se recomienda un tratamiento activo, lo antes posible.</div>';
        // res3="success";
    }
    else if (msj>=19 || msj<28) {
        testDepresionResult5 = "Depresión severa";
        Swal.fire({
            title: '<output style="color: #20997B; font-family: "Quicksand";" id="testDepresionResult5">Depresión severa</output>',
            background: "#F0FFE2",
            html:
              '<output id="recomendacionTestSalud5" style="display: block;">Recomendamos un inicio inmediato con tratamiento ya que está en un grado grave de depresión, acuda a un especialista.</output>'+ '<br>'+ '<button onclick="AlmacenarTestDepresionResult5(testDepresionResult5)" type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Guardar</button>'+'<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            icon: 'error'
          });
        // resu="<h2 class='swal2-title' id='title'>Depresión severa</h2>";
        // res2=
        // '<div class="swal2-html-container" id="recomendacion" style="display: block;">Recomendamos un inicio inmediato con tratamiento ya que está en un grado grave de depresión, acuda a un especialista.</div>';
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