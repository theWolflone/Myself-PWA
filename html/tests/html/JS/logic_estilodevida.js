function show(){
    let msj=0, res="",
        option=document.querySelectorAll("input");
    console.log(option);
    for(i=0;i<option.length;i++){
        if(option[i].checked==true){
            num=option[i].value;
            msj=Number(msj)+Number(num);
        }
    }
    if(msj>17 && msj<=33){
        res="Bajo";
        res2="Es importante que introduzcas cambios para conseguir unos niveles de salud adecuados. Existen varias áreas que deberías revisar con el fin de incrementar los niveles de salud que alcanzas actualmente.";
        res3="success";
    }
    else if(msj>=34 && msj<=53){
        res="Medio";
        res2="<p style='font-family: 'Montserrat';'>'Tenés algunos hábitos saludables en tu estilo de vida pero te convendría realizar algunos ajustes con el objetivo de mejorar aun más tu salud e incrementar tus resultados'</p>";
        res3="error";
    }
    else{
        res="¡Felicidades";
        res2="Eres una persona que se cuida y que posee un estilo de vida saludable. ¡Sigue así!";
        res3="success";
    }
    showalert(msj,res);
    }
    function  showalert(puntaje,res){

    Swal.fire({
        title: res,
        text: res2,
        icon: res3,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#20997b'
      })
    }