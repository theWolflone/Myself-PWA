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
    showalert(msj);
    }
    function  showalert(puntaje){
    Swal.fire({
        title: puntaje,
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }