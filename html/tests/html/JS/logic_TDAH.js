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
        res="Positivo";
        res2="Es posible que tenga TDAH, recomendamos consultar con un especialista.";
        res3="success";
    }
    else{
        res="Negativo";
        res2="No presenta sintomas de TDAH, aunque recomendamos consultar con un especialista bajo cualquier sospecha";
        res3="error";
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