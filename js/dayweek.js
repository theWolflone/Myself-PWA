const date = new Date();
const weekday = date.getDay();
let dayweek = '';
let day=document.getElementById('DayWeek');


if (weekday == 0) {

      dayweek='Domingo';

}else if (weekday==1) {

      dayweek='Lunes';

      }else if (weekday==2) {

            dayweek='Martes';

      }else if (weekday==3) {

            dayweek='Miercoles';

      }else if (weekday==4) {

            dayweek='Jueves';

      }else if (weekday==5) {

            dayweek='Viernes';

      }else if (weekday==6) {

            dayweek='Sábado';

      }

day.innerHTML=dayweek;