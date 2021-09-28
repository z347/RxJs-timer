import { timeFormatValidation, valueValidation } from './helpers';

let interval;

function runTimer() {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  const sec = valueValidation(document.getElementById('js-seconds'));
  const min = valueValidation(document.getElementById('js-minutes'));
  const h = valueValidation(document.getElementById('js-hours'));

  if (sec != 0 || min != 0 || h != 0) {
    seconds = sec;
    minutes = min;
    hours = h;
  }

  interval = setInterval(() => {
    ++seconds;

    if (seconds === 60) {
      ++minutes;
      seconds = 0;
    }

    if (minutes === 60) {
      ++hours;
      minutes = 0;
    }

    timeFormatValidation(seconds, minutes, hours);
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

export { runTimer, stopTimer };
