'use strict';

let btnCalendar=document.getElementById('btnCalendar');

btnCalendar.addEventListener('click', MoveToCalendar);

async function getCalendar() {

      let unorderedEventList = await ListaRecordatorios();

      let unmappedEventList = unorderedEventList._idPersonaDB

      let mappedEventList = unmappedEventList.map((event) => {
            let mappedEvent = {};

            mappedEvent.name = event.NombreAsunto;
            mappedEvent.subtitle = event.Descripcion;
            mappedEvent.start = event.Fecha;
            mappedEvent.end = event.Fecha;

            return mappedEvent;
      });


      let unorderedMedicationList = await ListaMedicacion();

      let unmappedMedicationList = unorderedMedicationList._idPersonaDB

      let mappedMedicationList = unmappedMedicationList.map((medication) => {
            let mappedMedication = {};

            mappedMedication.name = medication.NombreMedicamento;
            mappedMedication.subtitle = "Tomar cada " + medication.tCada + " horas por " + medication.tDurante + " semanas";
            mappedMedication.start = medication.fechaInicio;
            mappedMedication.end = medication.fechaInicio;

            return mappedMedication;
      });


      let unorderedNoteList = await ListaNotas();

      let unmappedNoteList = unorderedNoteList._idPersonaDB

      let mappedNoteList = unmappedNoteList.map((note) => {
            let mappedNote = {};

            mappedNote.name = "Nota:";
            mappedNote.subtitle = note.Descripcion;
            mappedNote.start = note.Fecha;
            mappedNote.end = note.Fecha;

            return mappedNote;
      });

      Array.prototype.push.apply(mappedMedicationList, mappedNoteList);

      Array.prototype.push.apply(mappedEventList, mappedMedicationList);

      return mappedEventList;
      // unorderedMedicationList = await ListaMedicacion();
      // unorderedEventList = await ListaEventos();
      
}

function MoveToCalendar() {
      window.location.replace("./calendar.html");
}