function showTijd() {
  var date = new Date();
  var u = date.getHours(); //Pakt de uren
  var m = date.getMinutes(); //Pakt de minuten
  var s = date.getSeconds(); //Pakt de secondes
  
  u = (u < 10) ? "0" + u : u;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var tijd = u + ":" + m + "<span id='sec'>" + s + "s</span>";
  document.getElementById("tijd").innerHTML = tijd;



  if(u >= 0 && u <= 4){
    document.getElementById("message").innerHTML = "Het is nacht";
  } else if(u >= 5 && u <= 12) {
    document.getElementById("message").innerHTML = "Het is ochtend";
  } else if(u > 12 && u <= 18) {
    document.getElementById("message").innerHTML = "Het is middag";
  } else if(u > 18 && u <= 23) {
    document.getElementById("message").innerHTML = "Het is avond";
  }

  if(s >= 0 && s <= 20) {
    document.getElementById("sec").style= "color:#18E042";
  } else if(s >= 20 && s <= 40) {
    document.getElementById("sec").style= "color:#EEBE00";
  } else if(s >=40 && s <= 60) {
    document.getElementById("sec").style= "color:red";
  }
}
showTijd(); //Zorgt ervoor dat de klok meteen te zien nadat de pagin is geladen
setInterval(showTijd, 1000); //Zorgt voor refresh

function showDatum() {
  var datum = new Date();
  var dagen = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
  document.getElementById("dag").innerHTML = dagen[datum.getDay()];

  var dagMaand = datum.getDate();
  var maand = datum.getMonth() + 1;
  var jaar = datum.getFullYear();

  var lDatum = dagMaand + " " + maand + " " + jaar;
  document.getElementById("datum").innerHTML = lDatum;
}
showDatum(); //Laat de datum zien

function getNaam() {
  var naam = document.getElementById("naam").value;
  document.getElementById("persoon").innerHTML = naam;

  document.getElementById("form").style = "display:none";
}


TweenLite.to(".raket", 3.5, { ease: SlowMo.ease.config(0.7, 1.5, false), x: 2000, repeat:5});
