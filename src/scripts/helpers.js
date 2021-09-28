import { runTimer, stopTimer } from './timer'

const startButton = document.getElementById('js-start')
const secondsHTML = document.getElementById('js-seconds')
const minutesHTML = document.getElementById('js-minutes')
const hoursHTML = document.getElementById('js-hours')

function timeFormatValidation(seconds, minutes, hours) {
  if (seconds < 10) {
    secondsHTML.innerHTML = `0${seconds}`
  } else {
    secondsHTML.innerHTML = seconds
  }

  if (minutes < 10 || typeof minutes === 'string') {
    minutesHTML.innerHTML = `0${parseInt(minutes)}`
  } else {
    minutesHTML.innerHTML = minutes
  }

  if (hours < 10 || typeof hours === 'string') {
    hoursHTML.innerHTML = `0${parseInt(hours)}`
  } else {
    hoursHTML.innerHTML = hours
  }

  return
}

function valueValidation(tag) {
  const splitStringifyData = tag.outerHTML.split('>')
  const breakData = splitStringifyData[1].split('<')

  return breakData[0]
}

function start() {
  startButton.innerHTML = 'stop'

  return runTimer()
}

function stop() {
  startButton.innerHTML = 'start'
  secondsHTML.innerHTML = '00'
  minutesHTML.innerHTML = '00'
  hoursHTML.innerHTML = '00'

  return stopTimer()
}

export { timeFormatValidation, valueValidation, start, stop }
