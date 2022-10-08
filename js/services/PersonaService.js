'use strict';

async function RegistrarPersona(
  pNombre,
  pApellidos,
  pSexo,
  pEdad,
  pCarnet,
  pSeccion,
  pMail,
  pPassword,
  pFotoPerfil
) {
  let result = {};
  await axios({
    method: 'post',
    url: apiUrl + '/RegistrarPersona',
    responseType: 'json',
    data: {
      'Nombre': pNombre,
      'Apellidos': pApellidos,
      'Sexo': pSexo,
      'Edad': pEdad,
      'Carnet': pCarnet,
      'Seccion': pSeccion,
      'Mail': pMail,
      'Password': pPassword,
      'FotoPerfil': pFotoPerfil,
    },
  })
    .then((res) => {
      result = res.data;
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}

async function listaPersonas() {
  let result = {};
  await axios({
    method: 'get',
    url: apiUrl + '/listarPersonas',
    responseType: 'json',
  })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}


async function BuscarPersona(p_id, pMail) {
  let result = {};
  await axios({
    method: 'get',
    url: apiUrl + '/buscarPersonaMail',
    responseType: 'json',
    params: {
      '_id': p_id,
      'Mail': pMail,
    },
  })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}

async function ModificarPersona(
  pNombre,
  pApellidos,
  pCorreo,
  pPassword,
  pFotoPerfil,
) {
  let result = {};
  await axios({
    method: 'post',
    url: apiUrl + '/ModificarPersona',
    responseType: 'json',
    data: {
      'Nombre': pNombre,
      'Apellidos': pApellidos,
      'Correo': pCorreo,
      'Password': pPassword,
      'FotoPerfil': pFotoPerfil,
    },
  })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
}
