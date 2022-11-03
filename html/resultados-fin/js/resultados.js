// let imagen=document.querySelectorAll(".buttonl");
// (function(){
//     for (i=0; i<imagen.length; i++){
//     imagen[i].addEventListener("click",on);
//     function on(){
//         imag.classList.toggle('buttonlup');
//         imag.addEventListener("click",on);
//     }
// }
// })();
function read(i){
    let imagen=document.querySelectorAll(".buttonl"), hiden=document.querySelectorAll(".hiden1");
    hide=hiden[i-1];
    imag=imagen[i-1];
    imag.classList.toggle('buttonlup');
    hide.classList.toggle('show');
}
function readm(i){
    let imagen=document.querySelectorAll(".button"),  hiden=document.querySelectorAll(".hiden");
    hide=hiden[i-1];
    imag=imagen[i-1];
    imag.classList.toggle('buttonup');
    hide.classList.toggle('show');

}
(function(){
    // El array caso es en la que se almacena el nombre de los test que están en la base
    // Result es el array en el cual se almacena el resultado que se obtuvo en el test 
    // Por ejemplo el único test completado es el de depresion entonces de arriba hacia abajo el test de depresion es la tercera posición el array o la posición 2 en un array ya que inican en 0. entonces todos los que estén en la posición del test de depresion se van a cambiar
    let img = document.querySelectorAll(".imgres"), statu = document.querySelectorAll(".resultado"), reco = document.querySelectorAll("#comentario"), date = document.querySelectorAll("#date_p");
    let caso = ["Test salud y estilo de vida", "Test salud", "Test de depresion", "Test de ansiedad", "Test de TDA-TDAH", "Test de TCA", "Test de prediabetes", "Test de insomnio"], fecha=["20/11/22", "20/11/22", "20/11/22", "20/11/22", "20/11/22", "20/11/22", "20/11/22", "20/11/22", "20/11/22", "20/11/22"],
    result = ["Bajo", "Riesgo bajo", "Depresión severa", "Ansiedad severa", "Negativo","Negativo", "Poco riesgo", "Negativo"];   
    for (i=0; i<caso.length; i++){
        switch(caso[i]){
            case "Test salud y estilo de vida":
                if(result[i] == "Bajo"){
                img[i].src = `assets/86-close-circle.svg`;
                statu[i].innerHTML = result[i];
                reco[i].innerHTML = "Es importante que introduzcas cambios para conseguir unos niveles de salud adecuados.";
                date[i].innerHTML = fecha[i];
                }
                else if(result[i] == "Medio"){
                    img[i].src = `assets/88-tick-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "Tienes algunos hábitos saludables en tu estilo de vida pero te convendría realizar algunos ajustes con el objetivo de mejorar aun más tu salud e incrementar tus resultados.";
                    date[i].innerHTML = fecha[i];
                }
                else if(result[i] == "¡Felicidades!"){
                    img[i].src = `assets/88-tick-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "Eres una persona que se cuida y que posee un estilo de vida saludable.";
                    date[i].innerHTML = fecha[i];
                }
                break;
            case "Test salud":
                if(result[i] == "Sin sintomas"){
                    img[i].src = `assets/86-close-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "No presenta síntomas de una mala salud mental, por favor bajo cualquier sospecha acuda con un especialista.";
                    date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Riesgo bajo"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Al parecer presentas una leve afectacción en tu salud mental y bajo cualquier sospecha acuda con un especialista.";
                        date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Riesgo moderado"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Los resultados indican que podrías estar presentando algunos síntomas malestar emocional, en relación con tu salud mental.";
                        date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Riesgo alto"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Los resultados indican que podrías estar presentando un malestar emocional grave, en relación a tu salud mental.";
                        date[i].innerHTML = fecha[i];
                    }
                    break;
            case "Test de depresion":
                if(result[i] == "Nada o mínimo"){
                    img[i].src = `assets/86-close-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "No presenta síntomas de depresión, por favor bajo cualquier sospecha acuda con un especialista.";
                    date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Depresión leve"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Presta atención a tu salud mental y bajo cualquier sospecha acuda con un especialista.";
                        date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Depresión moderada"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Se recomienda un plan de tratamiento y ayuda de especialistas, no es recomendada la automedicación.";
                        date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Depresión moderada-grave"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Se recomienda un tratamiento activo, lo antes posible.";
                        date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Depresión severa"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Recomendamos un inicio inmediato con tratamiento ya que está en un grado grave de depresión, acuda a un especialista.";
                        date[i].innerHTML = fecha[i];
                    }
                    break;
            case "Test de ansiedad":
                if(result[i] == "No sufre sintomas"){
                    img[i].src = `assets/86-close-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "No presenta síntomas de ansiedad, por favor bajo cualquier sospecha acuda con un especialista.";
                    date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Ansiedad leve"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Presta atención a tu salud mental y bajo cualquier sospecha acuda con un especialista.";
                        date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Ansiedad moderada"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Se recomienda un plan de tratamiento y ayuda de especialistas, no es recomendada la automedicación.";
                        date[i].innerHTML = fecha[i];
                    }
                    else if(result[i] == "Ansiedad severa"){
                        img[i].src = `assets/88-tick-circle.svg`;
                        statu[i].innerHTML = result[i];
                        reco[i].innerHTML = "Se recomienda un tratamiento activo, lo antes posible.";
                        date[i].innerHTML = fecha[i];
                    }
                    break;
            case "Test de TDA-TDAH":
                if(result[i] == "Negativo"){
                img[i].src = `assets/86-close-circle.svg`;
                statu[i].innerHTML = result[i];
                reco[i].innerHTML = "No presenta sintomas de TDAH, aunque recomendamos consultar con un especialista bajo cualquier sospecha.";
                date[i].innerHTML = fecha[i];
                }
                else if(result[i] == "Positivo"){
                    img[i].src = `assets/88-tick-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "Es posible que tenga TDAH, recomendamos consultar con un especialista.";
                    date[i].innerHTML = fecha[i];
                }
                break;
            case "Test de TCA":
                if(result[i] == "Es probable que tenga un TCA"){
                img[i].src = `assets/86-close-circle.svg`;
                statu[i].innerHTML = result[i];
                reco[i].innerHTML = "Es posible que tenga un TCA, recomendamos consultar con un especialista.";
                date[i].innerHTML = fecha[i];
                }
                else if(result[i] == "Poco riesgo"){
                    img[i].src = `assets/88-tick-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "No presenta factores de riesgo , aunque recomendamos consultar con un especialista bajo cualquier sospecha.";
                    date[i].innerHTML = fecha[i];
                }
                break;
            case "Test de prediabetes":
                if(result[i] == "Poco riesgo"){
                img[i].src = `assets/86-close-circle.svg`;
                statu[i].innerHTML = result[i];
                reco[i].innerHTML = "Tienes un mayor riesgo de tener prediabetes, recomendamos consultar con un especialista.";
                date[i].innerHTML = fecha[i];
                }
                else if(result[i] == "Mayor riesgo"){
                    img[i].src = `assets/88-tick-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "No presenta factores de riesgo , aunque recomendamos consultar con un especialista bajo cualquier sospecha.";
                    date[i].innerHTML = fecha[i];
                }
                break;
            case "Test de insomnio":
                if(result[i] == "Negativo"){
                img[i].src = `assets/86-close-circle.svg`;
                statu[i].innerHTML = result[i];
                reco[i].innerHTML = "No presenta sintomas de tener un trastorno del sueño, aunque recomendamos consultar con un especialista bajo cualquier sospecha.";
                date[i].innerHTML = fecha[i];
                }
                else if(result[i] == "Positivo"){
                    img[i].src = `assets/88-tick-circle.svg`;
                    statu[i].innerHTML = result[i];
                    reco[i].innerHTML = "Es posible que tenga un trastorno del sueño, recomendamos consultar con un especialista.";
                    date[i].innerHTML = fecha[i];
                }
                break;
                
    }
}

console.log(i);
})();