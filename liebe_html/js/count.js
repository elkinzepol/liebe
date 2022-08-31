function updateTimer() {
	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse("2018-10-27 08:30:00");
  now     = new Date();
  diff    = now - past;

  years  = Math.floor( diff / (1000*60*60*24*30*12) );
  months = Math.floor( diff / (1000*60*60*24*30) );
  days   = Math.floor( diff / (1000*60*60*24) );
  hours  = Math.floor( diff / (1000*60*60) );
  mins   = Math.floor( diff / (1000*60) );
  secs   = Math.floor( diff / 1000 );

  y = years;
  mo = months - years  * 12;
  d = days   - months * 30;
  h = hours  - days   * 24;
  m = mins   - hours  * 60;
  s = secs   - mins   * 60;
  document.getElementById("timer")
    .innerHTML =
       '<div class="count">' + y + '<div class="displayformat">Años</div></div>' +
       '<div class="count">' + mo + '<div class="displayformat">Meses</div></div>' +
       '<div class="count">' + d + '<div class="displayformat">Dias</div></div>' +
       '<div class="count">' + h + '<div class="displayformat">Horas</div></div>' +
       '<div class="count">' + m + '<div class="displayformat">Minutos</div></div>' +
       '<div class="count">' + s + '<div class="displayformat">Segundos</div></div>' ;
}
{/* 
<div class='count'> $1<div class='displayformat'>Days</div></div> 
<div class='count'> $2<div class='displayformat'>Hours</div></div> 
<div class='count'> $3<div class='displayformat'>Minutes</div></div> 
<div class='count'> $4<div class='displayformat'>Seconds</div></div>" 
*/}
setInterval('updateTimer()', 1000 );
