
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
// let puntaje=0,
//     opt=document.querySelectorAll('input');
//     for(i=0;i<opt.length;i++){
//         puntaje=puntaje+opt[i].value;
//     }
//     alert(puntaje);
    // opt=document.getElementsByClassName("option"),
    // opt1=document.getElementsByClassName("option1"),
    // opt2=document.getElementsByClassName("option2"),
    // opt3=document.getElementsByClassName("option3"),
    // opt4=document.getElementsByClassName("option4"),
    // opt5=document.getElementsByClassName("option5"),
    // opt6=document.getElementsByClassName("option6"),
    // opt7=document.getElementsByClassName("option7"),
    // opt8=document.getElementsByClassName("option8"),
    // opt9=document.getElementsByClassName("option9"),
    // opt10=document.getElementsByClassName("option10"),
    // opt11=document.getElementsByClassName("option11"),
    // opt12=document.getElementsByClassName("option12"),
    // opt13=document.getElementsByClassName("option13"),
    // opt14=document.getElementsByClassName("option14"),
    // opt15=document.getElementsByClassName("option15"),
    // opt16=document.getElementsByClassName("option16"),
    // opt17=document.getElementsByClassName("option16");