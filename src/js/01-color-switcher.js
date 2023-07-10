const selectors = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

selectors.startBtn.addEventListener('click', onBackgroundColorChange);
selectors.stopBtn.addEventListener('click', onStopButtonClick);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function onBackgroundColorChange() {
  selectors.startBtn.disabled = true;
  selectors.stopBtn.disabled = false;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopButtonClick() {
  selectors.startBtn.disabled = false;
  selectors.stopBtn.disabled = true;
  clearInterval(intervalId);
}
