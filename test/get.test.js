/**
 * @file This file contains unit tests for the get function.
 */

/**
 * Tests the get function.
 */

import get from '../src/get';

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe("get", () => {
  test("accessing value by index and key", () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  })
  test("path to value can be given as an array", () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  })
  test("default value is returned requested value does not exist", () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  })
  test("return undefined when requested value does not exist and default value is not specified", () => {
    expect(get(object, 'a.b.c')).toBe(undefined);
  })
  test("return undefined when object is null", () => {
    expect(get(null, 'a')).toBe(undefined);
  })
})