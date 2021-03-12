const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");

const colorsArr = colors.length;
const DELAY = 1000;
let intervalId = null;
stopBtn.disabled = true;

startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colorsArr)];
  }, DELAY);
}

function onStopBtnClick() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(intervalId);
}
