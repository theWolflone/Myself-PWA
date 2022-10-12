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
    if(msj>=5){
        res="Mayor riesgo";
        res2="Tienes un mayor riesgo de tener prediabetes, recomendamos consultar con un especialista.";
        res3="success";
    }
    else{
        res="Poco riesgo";
        res2="No presenta factores de riesgo , aunque recomendamos consultar con un especialista bajo cualquier sospecha";
        res3="error";
    }
    showalert(msj,res);
    }
    function  showalert(puntaje,res){

    Swal.fire({
        title: res,
        text: res2,
        icon: res3,
        confirmButtonText: 'Ok'
      })
    }