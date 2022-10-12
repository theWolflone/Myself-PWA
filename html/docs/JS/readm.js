function read(){
    let hideText = document.getElementById('hide_text'),
    btn =document.querySelector('.mo-inf'),
    btn1 =document.querySelector('.mo-inf1'),
    html = document.querySelector('html'),
    divd =document.querySelector('.down');
    //Togle the hiden text 
    html.classList.toggle('html2');
    divd.classList.toggle('down2');
    hideText.classList.toggle('show');
    btn.classList.toggle('hide');
    btn1.classList.toggle('show1');
}
let imagen=document.querySelector(".chevron-down");
(function(){
    imagen.addEventListener("click",on);
})();
function on(){
    imagen.src='assets/chevron-up.svg';
    imagen.addEventListener("click",out);
}
function out(){
    imagen.src='assets/chevron-down.svg';
    imagen.addEventListener("click",out);
}