'use strict';

let personaConsultada;
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let acc = urlParams.get('acc'); //M = Modificar C=Crear nuevo(CrudPersonas.html)
if (acc == null) {
  acc = 'N'; //Nuevo  (no se llama desde el CRUD)
}

btnRegistrar.addEventListener('click', Validaciones);