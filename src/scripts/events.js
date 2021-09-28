import { fromEvent } from 'rxjs'
import { bufferWhen, delay, filter } from 'rxjs/operators'

import { valueValidation, start, stop } from './helpers'
import { stopTimer } from './timer'

const startButton = document.getElementById('js-start')
const resetButton = document.getElementById('js-reset')
const waitButton = document.getElementById('js-wait')

const wait$ = fromEvent(waitButton, 'click')
const reset$ = fromEvent(resetButton, 'click')
const start$ = fromEvent(startButton, 'click')

start$.subscribe(() => {
  const currentState = valueValidation(startButton)

  if (currentState === 'start') {
    return start()
  }

  return stop()
})

reset$.subscribe(() => {
  const currentState = valueValidation(startButton)

  if (currentState === 'stop') {
    stop()
    return start()
  }

  return
})

wait$
  .pipe(
    bufferWhen(() => wait$.pipe(delay(300))),
    filter((event) => event.length === 2)
  )
  .subscribe(() => {
    startButton.innerHTML = 'start'
    return stopTimer()
  })

start$.subscribe({
  next: (value) => console.info(value),
  error: (error) => console.error(error),
  complete: () => console.info('event end')
})

reset$.subscribe({
  next: (value) => console.info(value),
  error: (error) => console.error(error),
  complete: () => console.info('event end')
})

wait$.subscribe({
  next: (value) => console.info(value),
  error: (error) => console.error(error),
  complete: () => console.info('event end')
})
