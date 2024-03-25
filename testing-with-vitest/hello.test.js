import { test, expect } from 'vitest'

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}

test('1+1', () => {
  expect(1 + 1).toEqual(2)
})

test('sum', () => {
  expect(sum(1, 1)).toEqual(2)
})
test('sum zero', () => {
  expect(sum()).toEqual(0)
})
