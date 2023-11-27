/**
 * @file This file contains unit tests for the every function.
 */

/**
 * Tests the every function.
 */

import every from '../src/every';

describe("every", () => {
  test("test boolean values when all are boolean", () => {
    expect(every([true, true, false], Boolean)).toBe(true);
  })
  test("test boolean values when not all are boolean", () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
  })
  test("test numeric values when all are numeric", () => {
    expect(every([-3, 2.55, 7/8], Number)).toBe(true);
  })
  test("test numeric values when not all are numeric", () => {
    expect(every([-3, 2.55, "1"], Number)).toBe(false);
  })
  test("test string values when all are strings", () => {
    expect(every(["hello", "1", "true", "abc"], Number)).toBe(true);
  })
  test("test string values when not all are strings", () => {
    expect(every([123, "1", false, "abc"], Number)).toBe(false);
  })
  test("return true for empty array", () => {
    expect(every([], Boolean)).toBe(true);
  })
  test("return true for null array", () => {
    expect(every(null, Number)).toBe(true);
  })
})