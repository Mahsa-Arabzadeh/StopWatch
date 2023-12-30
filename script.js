// Selecting elements using class names
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const dateOfToday = document.querySelector(".date-today");
const arrowRight = document.querySelector(".arrow-right");
const pause = document.querySelector(".pause");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const stopWatchClock = document.querySelector(".stopwatchclock");

// Initializing timer variables
let hours = 0,
  minutes = 0,
  seconds = 0;
let interval;

// Timer function to update time values
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

// Function to update the current date and time
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

// Event listener for the reset button
resetBtn.addEventListener("click", function () {
  // Resetting timer values and clearing interval
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(interval);

  // Resetting display and class properties
  arrowRight.style.display = "block";
  pause.classList.add("pause");
  stopWatchClock.classList.remove("headline");

  // Updating displayed time values
  second.innerHTML = "0" + seconds;
  minute.innerHTML = "0" + minutes;
  hour.innerHTML = "0" + hours;
});

// Event listener for the start button
startBtn.addEventListener("click", function () {
  // Checking the display style of arrowRight element
  const arrowRightStyle = window.getComputedStyle(arrowRight);

  // Starting or pausing the timer based on arrowRight's display style
  if (arrowRightStyle.display === "block") {
    // If arrowRight is visible, start the timer
    pause.classList.remove("pause");
    arrowRight.style.display = "none";
    clearInterval(interval);
    interval = setInterval(timer, 1000);
    stopWatchClock.classList.add("headline");
  } else if (arrowRightStyle.display === "none") {
    // If arrowRight is hidden, pause the timer
    pause.classList.add("pause");
    arrowRight.style.display = "block";
    clearInterval(interval);
  }
});

console.log("sdf");
