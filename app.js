const msec = document.querySelector(".mseconds");
const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let msecs;

function start() {
  msecs = setInterval(function () {
    milliseconds = milliseconds + 1;
    let y = milliseconds / 2.5;
    msec.innerHTML = y.toFixed();
    if (milliseconds === 250) {
      seconds = seconds + 1;
      sec.innerHTML = seconds;
      milliseconds = 0;
    }
    if (seconds === 60) {
      minutes = minutes + 1;
      min.innerHTML = minutes;
      seconds = 0;
    }
  }, 1);
}
function stop() {
  clearInterval(msecs);
}
function clears() {
  msec.innerHTML = `0`;
  sec.innerHTML = `0`;
  min.innerHTML = `0`;
}
