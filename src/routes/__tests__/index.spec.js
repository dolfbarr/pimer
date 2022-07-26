import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/svelte'
import {vi, describe, it, expect, beforeAll} from 'vitest'

import Pimer from '../index.svelte'

window.HTMLElement.prototype.scroll = vi.fn()

window.Notification = {
  requestPermission: vi.fn(),
}

vi.mock('svelte/transition', () => ({
  fade: vi.fn(),
  draw: vi.fn(),
}))

describe('Pimer', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  it('renders', () => {
    render(Pimer)

    expect(screen.getByTestId('timer')).toBeInTheDocument()
    expect(screen.getByTestId('timer-count')).toBeInTheDocument()
    expect(screen.getByTestId('prev-button')).toBeInTheDocument()
    expect(screen.getByTestId('next-button')).toBeInTheDocument()
    expect(screen.getByTestId('play-button')).toBeInTheDocument()
    expect(screen.getByTestId('settings-button')).toBeInTheDocument()
    expect(screen.getByTestId('reset-button')).toBeInTheDocument()

    expect(screen.queryByTestId('settings-container')).toBeNull()
    expect(screen.queryByTestId('mode-button')).toBeNull()
  })

  it('shows settings on settings button click', async () => {
    render(Pimer)

    const settingsButton = screen.getByTestId('settings-button')
    await fireEvent.click(settingsButton)

    expect(screen.getByTestId('settings-container')).toBeVisible()
  })

  it('works with sessions', async () => {
    render(Pimer)

    await fireEvent.click(screen.getByTestId('next-button'))
    expect(screen.queryAllByTestId('session-dot')).toHaveLength(1)

    await fireEvent.click(screen.getByTestId('prev-button'))
    expect(screen.queryAllByTestId('session-dot')).toHaveLength(0)
  })
})
