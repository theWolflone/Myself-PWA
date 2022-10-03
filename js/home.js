function display() {
      Swal.fire({
            title: '<h2 style="color: #20997B; font-family: Quicksand;">CREAR</h2>',
            background: '#F0FFE2',
            html:
                  '<button style="width: 70vw; background-color: #1F4650; border-radius: 20px;" onclick="notas()">'+
                        '<h3 style="color:#F0FFE2; font-family: Montserrat Normal; font-size: 2.2vh;">Escribir nota</h3>'+
                  '</button>'+
                  '<br>'+
                  '<br>'+
                  '<button style="width: 70vw; background-color: #1F4650; border-radius: 20px;" onclick="medicacion()">'+
                        '<h3 style="color:#F0FFE2; font-family: Montserrat Normal; font-size: 2.2vh;">Añadir medicación</h3>'+
                  '</button>'+
                  '<br>'+
                  '<br>'+
                  '<button style="width: 70vw;  background-color: #1F4650; border-radius: 20px;" onclick="recordatorio()">'+
                        '<h3 style="color:#F0FFE2; font-family: Montserrat Normal; font-size: 2.2vh;">Añadir recordatorio</h3>'+
                  '</button>'+
                  '<br>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,

          })
}

function notas() {
      Swal.fire({
            title: '<h2 style="color: #20997B; font-family: Quicksand;; text-align: left; font-size: 3vh; margin: 0;">NOTAS</h2>',
            background: '#F0FFE2',
            html:
            '<textarea id="notes" required wrap="soft" style="resize: none; width: 70vw; height: 25vh; border: none; border-radius: 15px; padding: 4vw; margin:auto; box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25); background: #FFFEF4; font-size: 1.9vh;" placeholder="Escribe cómo te has sentido hoy..."></textarea>'+
            '<button style="width: 40vw; font-family: Montserrat Normal; height:8vh; background-color: #1F4650; border-radius: 20px; margin-top: 2vh"; >'+
            '<h3 style="color: #FFFFE3; font-size: 2.2vh;">Guardar</h3>'+
            
            '</button>',
            focusConfirm: false,
            showCancelButton: false,
            showConfirmButton: false,
            showCloseButton: true,
            confirmButtonColor: '#1F4650',
            
          }) 
}

function medicacion() {
      Swal.fire({
            title: '<h2 style="color: #20997B; text-align: left; font-size: 3vh; margin: 0; font-family: Quicksand;">AÑADIR MEDICACIÓN</h2>',
            background: '#F0FFE2',
            html:
            '<br>'+
            '<label style="color: #1F4650; font-family: Montserrat Normal; font-weight: bold; font-size: 2.4vh;" >Nombre del medicamento</label>'+
            '<input type="text" required style=" font-family: Montserrat Normal; width: 60vw; height: 3.5vh; border-radius: 5px; background: #FEFDF9; border: none; box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); border-radius: 5px; margin-top: 1vh; padding-left: 2vw; font-size: 1.9vh;"></input>'+
            '<div style="margin-top: 2vh; text-align: left;">'+
            '<label style="color: #1F4650; font-family: Montserrat Normal; font-weight: bold; font-size: 2.4vh;">Tomar cada</label>'+
            '<br>'+
            '<input type="number" required min="1" style=" text-align: left; font-family: Montserrat Normal; margin-top:.5vh; width: 23vw; height: 3.5vh; border-radius: 5px; background: #FEFDF9; border: none; box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); border-radius: 5px; padding-left: 2vw; font-size: 1.9vh;"></input>'+
            '<p style="color: #1F4650; font-family: Montserrat Normal; font-weight: bold; font-size: 2.4vh; margin: 0; margin-top: 1vh;">horas</p>'+
            '</div>'+
            '<div style="position:absolute;  font-family: Montserrat Normal; text-align: right; left: 52.5vw; top: 20.9vh;">'+
            '<label style="color: #1F4650; font-family: Montserrat Normal; font-weight: bold; font-size: 2.4vh;">Tomar durante</label>'+
            '<br>'+
            '<input type="number" required min="1" style=" font-family: Montserrat Normal; margin-top:.5vh; width: 23vw; height: 3.5vh; border-radius: 5px; background: #FEFDF9; border: none; box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); border-radius: 5px; padding-left: 2vw; font-size: 1.9vh;"></input>'+
            '<p style="color: #1F4650; font-weight: bold; font-size: 2.4vh; margin: 0; margin-top: 1vh;">semanas</p>'+
            '</div>'+
            '<div style="margin-top: 3vh; text-align: center;">'+
            '<label style="color: #1F4650; font-family: Montserrat Normal; font-weight: bold; font-size: 2.4vh;">Fecha de inicio</label>'+
            '<br>'+
            '<input type="date" required style=" font-family: Montserrat Normal; margin-top:.5vh; text-align: center; width: 40vw; height: 3.5vh; border-radius: 5px; background: #FEFDF9; border: none; box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); border-radius: 5px; padding-left: 2vw; font-size: 1.9vh;"></input>'+
            '</div>'+
            '<button style="width: 40vw; font-family: Montserrat Normal; height:8vh; background-color: #1F4650; border-radius: 20px; margin-top: 2vh"; >'+
            '<h3 style="color: #FFFFE3; font-size: 2.2vh;">Guardar</h3>'+
            
            '</button>',
            focusConfirm: false,
            showCancelButton: false,
            showConfirmButton: false,
            showCloseButton: true,
            confirmButtonColor: '#1F4650',
            
          })  
      }

      function recordatorio() {
            Swal.fire({
                  title: '<h2 style="color: #20997B; text-align: left; font-size: 2.5vh; margin: 0; font-family: Quicksand;">AÑADIR RECORDATORIO</h2>',
                  background: '#F0FFE2',
                  html:
                  '<br>'+
                  '<div style="text-align: left;">'+
                  '<label style="color: #1F4650; font-family: Quicksand; font-weight: bold; font-size: 2.4vh; text-align: left;" >Nombre o asunto</label>'+
                  '<input type="text" required style="font-family: Montserrat Normal; width: 76vw; height: 3.5vh; border-radius: 5px; background: #FEFDF9; border: none; box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); border-radius: 5px; margin-top: 1vh; padding-left: 2vw; font-size: 1.9vh;"></input>'+
                  '<textarea id="notes" wrap="soft" style="resize: none; width: 70vw; height: 15vh; border: none; border-radius: 15px; padding: 4vw; margin:auto; margin-top: 2vh; box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25); background: #FFFEF4; font-size: 1.9vh;" placeholder="Descripción..."></textarea>'+
                  '<div style="margin-top: 3vh; text-align: left;">'+
                  '<label  style=" font-family: Montserrat Normal; color: #1F4650; font-weight: bold; font-size: 2.4vh;">Fecha</label>'+
                  '<br>'+
                  '<input type="date" required style="font-family: Montserrat Normal; margin-top:.5vh; text-align: left; width: 40vw; height: 3.5vh; border-radius: 5px; background: #FEFDF9; border: none; box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25); border-radius: 5px; padding-left: 2vw; font-size: 1.9vh;"></input>'+
                  '</div>'+

                  '<div style="text-align: center;">'+
                  '<button style="width: 40vw; font-family: Montserrat Normal; height:8vh; background-color: #1F4650; border-radius: 20px; margin-top: 2vh"; >'+
            '<h3 style="color: #FFFFE3; font-size: 2.2vh;">Guardar</h3>'+
            
            '</button>',
                  focusConfirm: false,
                  showCancelButton: false,
                  showConfirmButton: false,
                  showCloseButton: true,
                  confirmButtonColor: '#1F4650',
                  
                }) 
      }