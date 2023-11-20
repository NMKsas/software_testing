/**
 * @file This file contains unit tests for the divide function.
 */

/**
 * Tests the divide function.
 */

import divide from '../src/divide';

describe("divide", () => {
  test("dividing two positive numbers returns a positive result", () => {
    expect(divide(10, 5)).toBe(2);
  })
  test("dividing positive number with negative number returns a negative result", () => {
    expect(divide(6, -2)).toBe(-3);
  })
  test("dividing integers when result is not an integer", () => {
    expect(divide(10, 3)).toBeCloseTo(10/3, 3);
  })
  test("dividing positive number by zero returns infinity", () => {
    expect(divide(1, 0)).toBe(Infinity);
  })
  test("dividing negative number by zero returns minus infinity", () => {
    expect(divide(-1, 0)).toBe(-Infinity);
  })
  test("dividing zero by zero returns NaN", () => {
    expect(divide(0, 0)).toBeNaN();
  })
  test("dividing decimal values works", () => {
    expect(divide(15.5, 6.2)).toBeCloseTo(2.5, 3);
  })
  test("dividing zero by positive number returns zero", () => {
    expect(divide(0, 8)).toBe(0);
  })
})