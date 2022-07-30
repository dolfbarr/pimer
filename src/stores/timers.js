import {writable, get} from 'svelte/store'
import {settings} from './settings'
import {
  DEFAULT_WORK_TASK,
  LONG_BREAK_TIMER,
  WORK_TIMER,
  BREAK_TIMER,
  LONG_BREAK_APPEAR,
  DEFAULT_BREAK_TASK,
  DEFAULT_WORK_TIME,
} from '../constants'

export const currentTimer = writable(DEFAULT_WORK_TIME)
export const currentTimerName = writable(WORK_TIMER)
export const currentTask = writable(DEFAULT_WORK_TASK)

export const isTimerGoing = writable(false)
export const isTimerPaused = writable(false)

export const timerInterval = writable(-1)

export const session = writable([])

export const pickNextTimer = () => {
  if (get(session).length && get(session)[get(session).length - 1].timer === WORK_TIMER) {
    if (get(session).length % (get(settings)[LONG_BREAK_APPEAR] * 2 - 1) === 0) {
      currentTimer.set(Number(get(settings)[LONG_BREAK_TIMER]))
      currentTimerName.set(LONG_BREAK_TIMER)
    } else {
      currentTimer.set(Number(get(settings)[BREAK_TIMER]))
      currentTimerName.set(BREAK_TIMER)
    }
  } else {
    currentTimer.set(Number(get(settings)[WORK_TIMER]))
    currentTimerName.set(WORK_TIMER)
  }

  currentTask.set(get(currentTimerName) !== WORK_TIMER ? DEFAULT_BREAK_TASK : DEFAULT_WORK_TASK)
}
