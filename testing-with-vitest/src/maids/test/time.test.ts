import { expect, test, vi } from 'vitest'

function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5)
}

test('time', () => {
  vi.setSystemTime(new Date('2000-1-1 09:38'))
  expect(getCurrentTime()).toBe('09:38')
})
