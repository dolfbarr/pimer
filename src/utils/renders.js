import {isBreak} from './pimer'
import {MINUTE_IN_MS, SECOND_IN_MS} from '../constants'

export const getBackgroundColor = (current) => {
  return `transition-[background-color] duration-500 ${
    isBreak(current)
      ? 'text-white dark:text-zinc-200 bg-lime-500 dark:bg-lime-800'
      : 'bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-200'
  }`
}

export const renderTime = (time) => time.toString().padStart(2, '0')

export const getFullMinutes = (totalTimeInMs) => {
  return renderTime(Math.floor(totalTimeInMs / MINUTE_IN_MS))
}

export const getRemainderSeconds = (totalTimeInMs) => {
  return renderTime(Math.floor((totalTimeInMs - Number(getFullMinutes(totalTimeInMs)) * MINUTE_IN_MS) / SECOND_IN_MS))
}

export const scrollToBottom = async (node) => {
  node.scroll({top: node.scrollHeight, behavior: 'smooth'})
}
