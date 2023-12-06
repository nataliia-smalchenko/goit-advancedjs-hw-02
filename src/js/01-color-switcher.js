const elements = {
  btnStart: document.querySelector('.js-btn-start'),
  btnStop: document.querySelector('.js-btn-stop'),
  body: document.body,
};

elements.btnStop.disabled = true;

elements.btnStart.addEventListener('click', startColorChange);
elements.btnStop.addEventListener('click', stopColorChange);

let interval;

function startColorChange() {
  interval = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  elements.btnStart.disabled = true;
  elements.btnStop.disabled = false;
  elements.body.style.backgroundColor = getRandomHexColor();
}

function stopColorChange() {
  clearInterval(interval);
  elements.btnStart.disabled = false;
  elements.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
