const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const dateOfToday = document.querySelector(".date-today");
const arrowRight = document.querySelector(".arrow-right");
const pause = document.querySelector(".pause");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const stopWatchClock = document.querySelector(".stopwatchclock");

let hours = 0,
  minutes = 0,
  seconds = 0;
let interval;

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

resetBtn.addEventListener("click", function () {
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(interval);
  arrowRight.style.display = "block";
  pause.classList.add("pause");
  stopWatchClock.classList.remove("headline");
  second.innerHTML = "0" + seconds;
  minute.innerHTML = "0" + minutes;
  hour.innerHTML = "0" + hours;
});

startBtn.addEventListener("click", function () {
  const arrowRightStyle = window.getComputedStyle(arrowRight);
  if (arrowRightStyle.display === "block") {
    pause.classList.remove("pause");
    arrowRight.style.display = "none";
    clearInterval(interval);
    interval = setInterval(timer, 1000);
    stopWatchClock.classList.add("headline");
  } else if (arrowRightStyle.display === "none") {
    pause.classList.add("pause");
    arrowRight.style.display = "block";
    clearInterval(interval);
  }
});
