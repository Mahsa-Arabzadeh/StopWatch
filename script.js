const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const dateOfToday = document.querySelector(".date-today");

let hours = 0,
  minutes = 0,
  seconds = 0;
setInterval(timer, 1000);
function timer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  let hou = hours < 10 ? "0" + hours : hours,
    min = minutes < 10 ? "0" + minutes : minutes,
    sec = seconds < 10 ? "0" + seconds : seconds;
  hour.innerHTML = hou;
  minute.innerHTML = min;
  second.innerHTML = sec;
}

setInterval(todayDate, 1000);
function todayDate() {
  let now = new Date(),
    h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds(),
    hou = h < 10 ? "0" + h : h,
    min = m < 10 ? "0" + m : m,
    sec = s < 10 ? "0" + s : s;

  dateOfToday.innerHTML = hou + ":" + min + ":" + sec;
}
