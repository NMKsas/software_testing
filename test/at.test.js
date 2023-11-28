/**
 * @file This file contains unit tests for the at function.
 */

/**
 * Tests the at function.
 */

import at from '../src/at';

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe("at", () => {
  test("return multiple values as an array", () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
  })
  test("return only one value in an array", () => {
    expect(at(object, ['a[0].b'])).toStrictEqual([{'c': 3}]);
  })
  test("return undefined when search path is incorrect", () => {
    expect(at(object, ['b'])).toStrictEqual([undefined]);
  })
  test("returned array can contain undefined and defined values", () => {
    expect(at(object, ['d', 'a[0].b.c', 'a[1]'])).toStrictEqual([undefined, 3, 4]);
  })
  test("return undefined when object is undefined", () => {
    expect(at(undefined, ['a'])).toStrictEqual([undefined]);
  })
})