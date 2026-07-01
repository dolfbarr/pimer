import {writable} from 'svelte/store'
import {browser} from '$app/env'
import {
  WORK_TIMER,
  DEFAULT_WORK_TIME,
  BREAK_TIMER,
  DEFAULT_BREAK_TIME,
  LONG_BREAK_TIMER,
  DEFAULT_LONG_BREAK_TIME,
  LONG_BREAK_APPEAR,
  DEFAULT_LONG_BREAK_APPEAR,
} from '../constants'

const getDefaultValue = (value, setting) => {
  if (browser && localStorage[setting]) {
    return localStorage[setting]
  }
  return value
}

export const settings = writable({
  [WORK_TIMER]: getDefaultValue(DEFAULT_WORK_TIME, WORK_TIMER),
  [BREAK_TIMER]: getDefaultValue(DEFAULT_BREAK_TIME, BREAK_TIMER),
  [LONG_BREAK_TIMER]: getDefaultValue(DEFAULT_LONG_BREAK_TIME, LONG_BREAK_TIMER),
  [LONG_BREAK_APPEAR]: getDefaultValue(DEFAULT_LONG_BREAK_APPEAR, LONG_BREAK_APPEAR),
})
