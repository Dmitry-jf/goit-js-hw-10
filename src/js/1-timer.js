import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  clockface: document.querySelectorAll('.value'),
  btnStart: document.querySelector('button[data-start]'),
  inputField: document.querySelector('#datetime-picker'),
};

let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0];

    if (userDate <= new Date()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: 'white',
        icon: 'ico-error',
      });

      refs.btnStart.disabled = true;
    } else {
      refs.btnStart.disabled = false;
    }
  },
};

flatpickr(refs.inputField, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  console.log(`Days: ${days}`);

  const hours = Math.floor((ms % day) / hour);
  console.log(`Hours: ${hours}`);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  console.log(`Minutes: ${minutes}`);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  console.log(`Seconds: ${seconds}`);

  return { days, hours, minutes, seconds };
}

refs.btnStart.disabled = true;

refs.btnStart.addEventListener('click', () => {
  refs.inputField.disabled = true;
  refs.btnStart.disabled = true;

  const intervalID = setInterval(() => {
    const diff = userDate - new Date();

    if (diff < 0) {
      clearInterval(intervalID);
      refs.inputField.disabled = false;

      console.log(diff);

      return;
    }
    const objTime = convertMs(diff);

    refs.clockface[0].textContent = String(objTime.days).padStart(2, '0');
    refs.clockface[1].textContent = String(objTime.hours).padStart(2, '0');
    refs.clockface[2].textContent = String(objTime.minutes).padStart(2, '0');
    refs.clockface[3].textContent = String(objTime.seconds).padStart(2, '0');
  }, 1000);
});
