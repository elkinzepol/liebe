function diff() {
  //yyyy-MM-dd HH:mm:ss

  var a = moment('2018-10-27 20:30:00'); // past time
  var b = moment(); // current time
  diff = moment.preciseDiff(a, b, true); // objects with years, months, days, hours, minutes, seconds

  diff_years= diff['years'];
  diff_months= diff['months'];
  diff_days= diff['days'];
  diff_hours= diff['hours'];
  diff_minutes= diff['minutes'];
  diff_seconds= diff['seconds'];
  document.getElementById("timer")
    .innerHTML =
       '<div class="count">' + diff_years + '<div class="displayformat">Años</div></div>' +
       '<div class="count">' + diff_months + '<div class="displayformat">Meses</div></div>' +
       '<div class="count">' + diff_days + '<div class="displayformat">Dias</div></div>' +
       '<div class="count">' + diff_hours + '<div class="displayformat">Horas</div></div>' +
       '<div class="count">' + diff_minutes + '<div class="displayformat">Minutos</div></div>' +
       '<div class="count">' + diff_seconds + '<div class="displayformat">Segundos</div></div>' ;
}

setInterval(diff, 1000);
