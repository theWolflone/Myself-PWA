let inputs = document.getElementsByTagName("input");
let selects = document.getElementsByTagName("select");
let textAreas = document.getElementsByTagName("textArea");
let inputMailLogin = document.getElementById("txtCorreo");
let inputPassLogin = document.getElementById("txtContra");




function ValidarCampos() {

  let ckSel = false;
  let fieldsetName;
  let fieldID;
  let fieldLegend;
  let cantCks;
  let tipoElemento;

    
      for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].required == true) {
              //valido los campos INPUTS tipo TEXT
              if (
                inputs[i].type.toLowerCase() == "text" &&
                (inputs[i].value == "" ||
                  inputs[i].value == null ||
                  inputs[i].value == undefined)
              ) {
                ImprimirMsjError(
                  "Ingrese lo que se le solicita"
                );
                ResaltarInputInvalido(inputs[i].id);
                return false;
              }
        
              //valido los campos INPUTS tipo TEL
              if (
                inputs[i].type.toLowerCase() == "tel" &&
                (inputs[i].value == "" ||
                  inputs[i].value == null ||
                  inputs[i].value == undefined)
              ) {
                ResaltarInputInvalido(inputs[i].id);
                return false;
              }
        
              //valido los campos email
              if (inputs[i].type.toLowerCase() == "email") {
                if (
                  inputs[i].value == "" ||
                  inputs[i].value == null ||
                  inputs[i].value == undefined
                ) {
                  ResaltarInputInvalido(inputs[i].id);
                  return false;
                } else {
                  let valArroba = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;
                  if (valArroba.test(inputs[i].value) == false) {
      
                    ResaltarInputInvalido(inputs[i].id);
                    return false;
                  }
                }
              }
        
              //valido los campos INPUTS tipo password
              if (inputs[i].type.toLowerCase() == "password") {
                if (
                  inputs[i].value == "" ||
                  inputs[i].value == null ||
                  inputs[i].value == undefined
                ) {
                  
                  ResaltarInputInvalido(inputs[i].id);
                  return false;
                }
              }
        
              //valido los campos INPUTS tipo DATE
              if (inputs[i].type.toLowerCase() == "date") {
                if (
                  inputs[i].value == "" ||
                  inputs[i].value == null ||
                  inputs[i].value == undefined
                ) {
                  ResaltarInputInvalido(inputs[i].id);
                  return false;
                }
              }
        
              //valido los campos INPUTS tipo DATE
              if (inputs[i].type.toLowerCase() == "time") {
                if (
                  inputs[i].value == "" ||
                  inputs[i].value == null ||
                  inputs[i].value == undefined
                ) {
                  ResaltarInputInvalido(inputs[i].id);
                  return false;
                }
              }
        
              //valido los campos INPUTS tipo NUMBER
              //valido los campos INPUTS tipo NUMBER
              if (inputs[i].type.toLowerCase() == "number") {
                if (
                  inputs[i].value == "" ||
                  inputs[i].value == null ||
                  inputs[i].value == undefined
                ) {
                  //ImprimirMsjError('Cantidad requerida, ¡Favor validar!');
                  
                  ResaltarInputInvalido(inputs[i].id);
                  return false;
                } else {if ( Number(inputs[i].min) != "" && 
                    Number(inputs[i].min)  != null && 
                    Number(inputs[i].min)  != undefined ) {
                      if (Number(inputs[i].value) < Number(inputs[i].min)) {
                        ImprimirMsjError('Cantidad '+inputs[i].value+' debe ser mayor a ' + inputs[i].min + ' ¡Favor validar!');            
                        ResaltarInputInvalido(inputs[i].id);
                        return false;
                      }
                    }
                    //
                    if ( Number(inputs[i].max) != "" && 
                    Number(inputs[i].max)  != null && 
                    Number(inputs[i].max)  != undefined ) {
                      if ( Number(inputs[i].value) > Number(inputs[i].max)) {
                        ImprimirMsjError('Cantidad '+inputs[i].value +' debe ser menor o igual a ' +inputs[i].max + ' ¡Favor validar!');            
                        ResaltarInputInvalido(inputs[i].id);
                        return false;
                      }
                    }            
               }
              }
              

              
            }
          }
            

            for (var i = 0; i < selects.length; i++) {
              if (selects[i].required == true) {
                if (
                  selects[i].value == "" ||
                  selects[i].value == null ||
                  selects[i].value == undefined
                ) {
                  ImprimirMsjError(
                    "Seleccione un valor"
                  );
                  ResaltarInputInvalido(selects[i].id);
                  return false;
                }
              }
            }
      }


      function ValidarLogin() {

        if (inputMailLogin.type.toLowerCase() == "email") {
          if (
            inputMailLogin.value == null ||
            inputMailLogin.value == "" ||
            inputMailLogin.value == undefined
          ) {
            ResaltarInputInvalido(inputMailLogin.id);
            return false;
          } else {
            let valArroba = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;
            if (valArroba.test(inputMailLogin.value) == false) {

              ResaltarInputInvalido(inputMailLogin.id);
              return false;
            }
          }
        }


        if (inputPassLogin.type.toLowerCase() == "password") {
          if (
            inputPassLogin.value == "" ||
            inputPassLogin.value == null ||
            inputPassLogin.value == undefined
          ) {
            
            ResaltarInputInvalido(inputPassLogin.id);
            return false;
          }
        }



        
      }

    

      // function ImprimirMsjError(pmensaje) {
      //       Swal.fire({
      //         title: "¡Error!",
      //         text: pmensaje,
      //         icon: "error",
      //         confirmButtonColor: "#3D405B",
      //         confirmButtonText: "Ok",
      //       });
      //     }


      // function ResaltarInputInvalido(pInputId) {
      //       var elementLabel = document.getElementById(pInputId);
      //       var styleOrigin = elementLabel.style;
      //       elementLabel.style = "border: 2px solid #cb3715;";
      //       setTimeout(function () {
      //         elementLabel.style = styleOrigin;
      //       }, 5000);
      //     }
    