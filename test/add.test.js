/**
 * @file This file contains unit tests for the add function.
 */

/**
 * Tests the add function.
 */

import add from '../src/add';

describe("add", () => {
  test("should add two positive numbers: 6 + 4 should equal 10", () => {
    expect(add(6, 4)).toBe(10);
  })
  test("should add a positive and a negative number: 1 - 3 should equal -2", () => {
    expect(add(1, -3)).toBe(-2);
  })
  test("should add two negative numbers: -5 - 4 should equal -9", () => {
    expect(add(-5, -4)).toBe(-9);
  })
  test("should add a negative and a positive number: -2 + 8 should equal 6", () => {
    expect(add(-2, 8)).toBe(6);
  })

  /*   
    These test cases are depend on the implementation. While JavaScript automatically 
    Concatenates > MAX_VALUE to MAX_VALUE itself, the implementation could follow alternative
    path, such as defining overflow value as Infinity 
  */
  test("should result in Infinity, when positive number is added to Number.MAX_VALUE", () => {
    expect(add(Number.MAX_VALUE,100)).toBe(Infinity);
  });
  test("should result in -Infinity, when negative number is added to Number.MIN_VALUE", () => {
    expect(add(Number.MIN_VALUE,-100)).toBe(-Infinity);
  });


  test("should result in Infinity, when positive number is added to Infinity", () => {
    expect(add(Infinity,1)).toBe(Infinity);
  });
  test("should result in Infinity, when negative number is added to Infinity", () => {
    expect(add(Infinity,-100000)).toBe(Infinity);
  });
  test("should result in -Infinity, when positive number is added to -Infinity", () => {
    expect(add(-Infinity,1)).toBe(-Infinity);
  });
  test("should result in -Infinity, when negative number is added to -Infinity", () => {
    expect(add(-Infinity,-100000)).toBe(-Infinity);
  });

}); 

