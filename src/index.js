import "./styles.css";

const doce = document.getElementById("doce");
const once = document.getElementById("once");
const diez = document.getElementById("diez");
const nueve = document.getElementById("nueve");
const ocho = document.getElementById("ocho");
const siete = document.getElementById("siete");
const seis = document.getElementById("seis");
const cinco = document.getElementById("cinco");
const cuatro = document.getElementById("cuatro");
const tres = document.getElementById("tres");
const dos = document.getElementById("dos");
const uno = document.getElementById("uno");
const hours = document.getElementById("hours");
const ok = document.getElementById("ok");

function mia(horario) {
  switch (horario) {
    case 12:
      doce.style.color = "red";
      break;
    case 11:
      once.style.color = "blue";
      break;
    case 10:
      diez.style.color = "pink";
      break;
    case 9:
      nueve.style.color = "orange";
      break;
    case 8:
      ocho.style.color = "grey";
      break;
    case 7:
      siete.style.color = "yellow";
      break;
    case 6:
      seis.style.color = "purple";
      break;
    case 5:
      cinco.style.color = "green";
      break;
    case 4:
      cuatro.style.color = "brown";
      break;
    case 3:
      tres.style.color = "violet";
      break;
    case 2:
      dos.style.color = "golden";
      break;
    case 1:
      uno.style.color = "sky blue";
      break;
    default:
      return "";
  }
}
ok.addEventListener("click", function() {
  const value = parseInt(hours.value);
  mia(value);
});
function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  //ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr === 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  //hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  //console.log(hr);
  mia(hr);
  //document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();
