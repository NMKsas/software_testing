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
  test("test boolean values when all are true", () => {
    expect(every([true, true, true], Boolean)).toBe(true);
  })
  test("test boolean values when all are false", () => {
    expect(every([false], Boolean)).toBe(true);
  })
  test("test boolean values when not all are boolean", () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
  })
  test("test numeric values when all are numeric", () => {
    expect(every([-3, 2.55, 7/8], Number)).toBe(true);
  })
  test("test numeric values when there's a string with a number", () => {
    expect(every([-3, 2.55, "1"], Number)).toBe(false);
  })
  test("test numeric values when there's a string that could not be converted to number", () => {
    expect(every(["abc", -3, 2.55], Number)).toBe(false);
  })
  test("test string values when all are strings", () => {
    expect(every(["hello", "1", "true", "abc"], String)).toBe(true);
  })
  test("test string values when not all are strings", () => {
    expect(every([123, "1", false, "abc", undefined], String)).toBe(false);
  })
  test("test object values when all are objects", () => {
    expect(every([{a: 1}, {b: {c: 3}}, {d: [1, 2, 3]}], Object)).toBe(true);
  })
  test("test object values when not all are objects", () => {
    expect(every([{a: 1}, {b: {c: 3}}, undefined, {d: [1, 2, 3]}, null], Object)).toBe(true);
  })
  test("return true for empty array", () => {
    expect(every([], Boolean)).toBe(true);
  })
  test("return true for null array", () => {
    expect(every(null, Number)).toBe(true);
  })
})