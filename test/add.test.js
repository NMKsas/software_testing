/**
 * @file This file contains unit tests for the add function.
 */

/**
 * Tests the add function.
 */

import add from '../src/add';

describe("add", () => {
  test("6 + 4 should equal 10", () => {
    expect(add(6, 4)).toBe(10);
  })
  test("1 - 3 should equal -2", () => {
    expect(add(1, -3)).toBe(-2);
  })
  test("-5 - 4 should equal -9", () => {
    expect(add(-5, -4)).toBe(-9);
  })
  test("-2 + 8 should equal 6", () => {
    expect(add(-2, 8)).toBe(6);
  })
})