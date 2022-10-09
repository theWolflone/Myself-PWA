'use strict';

btnUser.addEventListener('click', CrearUser);
btnCliente.addEventListener('click', CrearCliente);

const inputFiltro = document.getElementById('txtFiltro');
inputFiltro.addEventListener('keyup', ImprimirDatos);

let listaPersonas = [];

GetListaPersonas();

async function GetListaPersonas() {
  let result = await ObtenerListaPersonas();
  if (result != {} && result.resultado == true) {
    listaPersonas = result.ListaPersonasBD;
    console.log(listaPersonas);
    ImprimirDatos();
  } else {
    imprimirMsjError(result.msj);
    return;
  }
}

async function ImprimirDatos() {
  let filtro = inputFiltro.value.toLowerCase();
  var tbody = document.getElementById('tbdPersonas');
  tbody.innerHTML = '';

  for (let i = 0; i < listaPersonas.length; i++) {
    if (
      listaPersonas[i].Nombre.toLowerCase().includes(filtro) ||
      ObtenerRol(listaPersonas[i].Rol).toLowerCase().includes(filtro) ||
      ObtenerEstado(listaPersonas[i].Estado).toLowerCase().includes(filtro) ||
      listaPersonas[i].Correo.toLowerCase().includes(filtro) ||
      listaPersonas[i].Cedula.toString().includes(filtro) ||
      listaPersonas[i].Telefono.toString().includes(filtro)
    ) {
      let fila = tbody.insertRow();
      let celdaCedula = fila.insertCell();
      let celdaNombre = fila.insertCell();
      let celdaCorreo = fila.insertCell();
      let celdaTelefono = fila.insertCell();
      let celdaRol = fila.insertCell();
      let celdaEstado = fila.insertCell();
      let celdaAcciones = fila.insertCell();

      ////////////////////////////////////////////////////
      //VER PERFIL PERSONA
      ////////////////////////////////////////////////////
      let btnPerfil = document.createElement('button');
      btnPerfil.onclick = function () {
        LimpiarLSPersonaConsultada();
        SetPersonaConsultada(listaPersonas[i]);
        const timeoutId = setTimeout(function () {
          window.location.replace('./PerfilPersona.html?acc=Q');
        }, 1000);
      };
      btnPerfil.type = 'button';
      btnPerfil.innerText = '🔍​';
      btnPerfil.title = 'Ver Perfil';
      btnPerfil.classList.add('DetalleBtn');

      ////////////////////////////////////////////////////
      //MODIFICAR PERSONA
      ////////////////////////////////////////////////////
      let btnEdit = document.createElement('button');
      btnEdit.onclick = function () {
        LimpiarLSPersonaConsultada();
        SetPersonaConsultada(listaPersonas[i]);
        const timeoutId = setTimeout(function () {
          // desplegar los datos de la persona consultada para que puedan ser modificados
          if (listaPersonas[i].Rol == 1 || listaPersonas[i].Rol == 2) {
            //Secretaria o Veterinario
            window.location.replace('./CrearCuentaUsuario.html?acc=M');
          } else if (listaPersonas[i].Rol == 3) {
            //Cliente
            window.location.replace('./CrearCuentaCliente.html?acc=M');
          }
        }, 1000);
      };
      btnEdit.type = 'button';
      btnEdit.innerText = '✏️​';
      btnEdit.title = 'Editar';
      btnEdit.classList.add('modificarBtn');

      ////////////////////////////////////////////////////
      //BORRADO LOGICO DE LA PERSONA
      ////////////////////////////////////////////////////
      let btnInactivar = document.createElement('button');
      btnInactivar.onclick = async function () {
        let confirmacion = false;
        let msj;
        let vEstado;

        if (listaPersonas[i].Estado == 0) {
          msj = 'Desea activar el registro de ' + listaPersonas[i].Nombre;
          vEstado = 1;
        } else {
          msj = 'Desea inactivar el registro de ' + listaPersonas[i].Nombre;
          vEstado = 0;
        }

        await Swal.fire({
          title: msj,
          showDenyButton: true,
          confirmButtonText: 'Confirmar',
          denyButtonText: 'Cancelar',
          icon: 'warning',
        }).then((res) => {
          confirmacion = res.isConfirmed;
        });
        if (confirmacion == true) {
          let result = await ModificarPersona(
            listaPersonas[i]._id,
            listaPersonas[i].Cedula,
            listaPersonas[i].Nombre,
            listaPersonas[i].Correo,
            listaPersonas[i].Password,
            listaPersonas[i].Telefono,
            listaPersonas[i].Direccion,
            listaPersonas[i].Rol,
            listaPersonas[i].PerfilFB,
            listaPersonas[i].PerfilIG,
            listaPersonas[i].PerfilTW,
            listaPersonas[i].FotoPerfil,
            vEstado
          );

          if (result.resultado == true) {
            ImprimirMsjSuccess(result.msj);
          } else {
            ImprimirMsjError(result.msj);
          }

          await GetListaPersonas();
        }
      };

      btnInactivar.type = 'button';
      btnInactivar.innerText = '💡';
      btnInactivar.title = 'Activar/Desactivar';
      btnInactivar.classList.add('eliminarBtn');

      ////////////////////////////////////////////////////
      //Crear Mascotas a la persona
      ////////////////////////////////////////////////////
      let btnMascota = document.createElement('button');
      btnMascota.onclick = function () {
        const timeoutId = setTimeout(function () {
          window.location.replace(
            './MascotaCreacion.html?_idC=' + listaPersonas[i]._id
          );
        }, 1000);
      };
      btnMascota.type = 'button';
      btnMascota.innerText = '🐕​';
      btnMascota.title = 'Crear Mascota';
      btnMascota.classList.add('DetalleBtn');
      ////////////////////////////////////////////////////
      //Crear cita a la persona
      ////////////////////////////////////////////////////
      let btnCita = document.createElement('button');
      btnCita.onclick = function () {
        const timeoutId = setTimeout(function () {
          window.location.replace(
            './CrearCita.html?_idC=' + listaPersonas[i]._id
          );
        }, 1000);
      };
      btnCita.type = 'button';
      btnCita.innerText = '📅​';
      btnCita.title = 'Crear Cita';
      btnCita.classList.add('modificarBtn');
      ////////////////////////////////////////////////////
      //Crear reservacion a la persona
      ////////////////////////////////////////////////////
      let btnHotel = document.createElement('button');
      btnHotel.onclick = function () {
        const timeoutId = setTimeout(function () {
          window.location.replace(
            './CrearReservacion.html?_idC=' + listaPersonas[i]._id
          );
        }, 1000);
      };
      btnHotel.type = 'button';
      btnHotel.innerText = '🏨';
      btnHotel.title = 'Crear Reservacion';
      btnHotel.classList.add('DetalleBtn');
      ////////////////////////////////////////////////////
      //Crear tarjetas a la persona
      ////////////////////////////////////////////////////
      let btnTarjeta = document.createElement('button');
      btnTarjeta.onclick = function () {
        const timeoutId = setTimeout(function () {
          window.location.replace(
            './MetodosPagoCreacion.html?_idC=' + listaPersonas[i]._id
          );
        }, 1000);
      };
      btnTarjeta.type = 'button';
      btnTarjeta.innerText = '💳​';
      btnTarjeta.title = 'Crear Tarjeta';
      btnTarjeta.classList.add('eliminarBtn');
      ////////////////////////////////////////////////////

      let divBtns = document.createElement('div');
      divBtns.appendChild(btnInactivar);
      divBtns.appendChild(btnPerfil);

      if (listaPersonas[i].Estado == 1) {
        divBtns.appendChild(btnEdit);
        if (listaPersonas[i].Rol == 3) {
          divBtns.appendChild(btnMascota);
          divBtns.appendChild(btnCita);
          divBtns.appendChild(btnHotel);
          divBtns.appendChild(btnTarjeta);
        }
      }

      ///////////////////////////////////////////////////

      celdaCedula.innerHTML = listaPersonas[i].Cedula;
      celdaNombre.innerHTML = listaPersonas[i].Nombre;
      celdaCorreo.innerHTML = listaPersonas[i].Correo;
      celdaTelefono.innerHTML = listaPersonas[i].Telefono;
      celdaRol.innerHTML = ObtenerRol(listaPersonas[i].Rol);
      celdaEstado.innerHTML = ObtenerEstado(listaPersonas[i].Estado);
      celdaAcciones.appendChild(divBtns);
    }
  }
}

function CrearUser() {
  window.location.replace('./CrearCuentaUsuario.html?acc=C');
}

function CrearCliente() { 
    window.location.replace("./CrearCuentaCliente.html?acc=C");
} 


$(document).ready(() => {
    $('th').each(function (columna) {
        $(this).click(function () {
            let datos = $('table').find('tbody > tr').get();

            datos.sort(function (a, b) {
                let valor1 = $(a).children('td').eq(columna).text().toUpperCase();
                let valor2 = $(b).children('td').eq(columna).text().toUpperCase();

                return valor1 < valor2 ? -1 : valor1 > valor2 ? 1 : 0;
            });

            $.each(datos, function (indice, elemento) {
                $('tbody').append(elemento);
            });
        });
    });
});