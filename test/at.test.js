/**
 * @file This file contains unit tests for the at function.
 */

/**
 * Tests the at function.
 */

import at from '../src/at';

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe("at", () => {
  test("given string path, returns root value as an array", () => {
    expect(at(object,'a')).toStrictEqual([[{ 'b': { 'c': 3 } }, 4]]);
  })
  test("given string array path, returns root value as an array", () => {
    expect(at(object,['a'])).toStrictEqual([[{ 'b': { 'c': 3 } }, 4]]);
  })
  test("given string array path, returns multiple values as an array", () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
  })
  test("given string array path, returns only one value in an array", () => {
    expect(at(object, ['a[0].b'])).toStrictEqual([{'c': 3}]);
  })
  test("given string path, returns undefined when search path is incorrect", () => {
    expect(at(object, 'b')).toStrictEqual([undefined]);
  })
  test("given string array path, returns undefined when search path is incorrect", () => {
    expect(at(object, ['b'])).toStrictEqual([undefined]);
  })
  test("returns an array that can contain undefined and defined values", () => {
    expect(at(object, ['d', 'a[0].b.c', 'a[1]'])).toStrictEqual([undefined, 3, 4]);
  })
  test("returns undefined when object is undefined", () => {
    expect(at(undefined, ['a'])).toStrictEqual([undefined]);
  })
})
