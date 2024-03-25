import { expect, test, vi } from 'vitest'
import { greeting } from '..'

test('greeting', () => {
  const spy = vi.spyOn(console, 'log')

  greeting('Siroj')
  expect(spy).toBeCalledTimes(1)
  expect(spy).toBeCalledWith('Hello, Siroj')

  spy.mockReset()

  greeting('World')
  expect(spy).toBeCalledTimes(1)
  expect(spy).toBeCalledWith('Hello, World')
})
