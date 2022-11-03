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
        resu="<h2 class='swal2-title' id='title'>No sufre sintomas</h2>";
        res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">No presenta síntomas de ansiedad, por favor bajo cualquier sospecha acuda con un especialista.</div>';
        res3="success";
    }
    else if(msj>=5 && msj<=9){
        resu="<h2 class='swal2-title' id='title'>Ansiedad leve</h2>";
        res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Presta atención a tu salud mental y bajo cualquier sospecha acuda con un especialista.</div>';
        res3="success";
    }
    else if(msj>=10 && msj<=14){
        resu="<h2 class='swal2-title' id='title'>Ansiedad moderada</h2>";
        res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Se recomienda un plan de tratamiento y ayuda de especialistas, no es recomendada la automedicación.</div>';
        res3="success";
    }
    else if(msj>=15 && msj<=21){
        resu="<h2 class='swal2-title' id='title'>Ansiedad severa</h2>";
        res2='<div class="swal2-html-container" id="recomendacion" style="display: block;">Se recomienda un tratamiento activo, lo antes posible.</div>';
        res3="success";
    }
    showalert(msj,resu);
    }
    function  showalert(puntaje,resu){
        let boton='<a href="../../tests.html"><button type="button" class="swal-confirm swal-styled swal2-default-outline" aria-label style="display: absolute; background-color: rgb(32, 153, 123);">Ok</button></a><button type="button" class="swal2-confirm swal2-styled" aria-label style="display: none;">OK</button>';
        Swal.fire({
            html: resu+res2+boton,
            icon: res3,
            showConfirmButton: false
          })
    }