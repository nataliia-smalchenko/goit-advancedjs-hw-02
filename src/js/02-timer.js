import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  btnStart: document.querySelector('.js-btn-start'),
  days: document.querySelector('.js-days'),
  hours: document.querySelector('.js-hours'),
  minutes: document.querySelector('.js-minutes'),
  seconds: document.querySelector('.js-seconds'),
  datetimePlicker: document.querySelector('#datetime-picker'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      iziToast.show({
        messageColor: '#fafafa',
        backgroundColor: '#f56c6c',
        messageSize: '18px',
        position: 'topRight',
        progressBar: false,
        animateInside: false,
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
        timeout: 3000,
        targetFirst: false,
        message: '❌  Please choose a date in the future',
      });
      elements.btnStart.disabled = true;
      return;
    }
    elements.btnStart.disabled = false;
    chosenTime = selectedDates[0];
  },
};

let chosenTime;

elements.btnStart.disabled = true;

flatpickr('#datetime-picker', options);
elements.btnStart.addEventListener('click', startTimer);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function startTimer() {
  elements.datetimePlicker.disabled = true;
  elements.btnStart.disabled = true;
  setTime();
  setInterval(setTime, 1000);
}

function setTime() {
  const ms = chosenTime - new Date();
  if (ms >= 0) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    elements.days.textContent = addLeadingZero(days);
    elements.hours.textContent = addLeadingZero(hours);
    elements.minutes.textContent = addLeadingZero(minutes);
    elements.seconds.textContent = addLeadingZero(seconds);
  }
}
