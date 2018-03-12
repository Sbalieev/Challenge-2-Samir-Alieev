function showTijd() {
  var date = new Date();
  var u = date.getHours(); //Pakt de uren
  var m = date.getMinutes(); //Pakt de minuten
  var s = date.getSeconds(); //Pakt de secondes


  var tijd = u + ":" + m + "<span id='sec'>" + s + "s</span>";
  document.getElementById("tijd").innerHTML = tijd;


}
showTijd(); //Zorgt ervoor dat de klok meteen te zien nadat de pagin is geladen
setInterval(showTijd, 1000); //Zorgt voor refresh

function showDatum() {
  var datum = new Date();
  var dagen = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("dag").innerHTML = dagen[datum.getDay()];

  var dagMaand = datum.getDate();
  var maand = datum.getMonth() + 1;
  var jaar = datum.getFullYear();

  var lDatum = dagMaand + " " + maand + " " + jaar;
  document.getElementById("datum").innerHTML = lDatum;
}
showDatum(); //Laat de datum zien
