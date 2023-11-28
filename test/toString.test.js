/**
 * @file This file contains unit tests for the toString function.
 */

/**
 * Tests the toString function.
 */

import toString from '../src/toString';

// placeholder for tests

describe("toString", () => {
  // returns always an array 
  test("should return an empty string when input is null", () => {
    const nullString = null; 
    expect(toString(nullString)).toBe(""); 
  });
  test("should return an empty string when input is undefined", () => {
    const undefString = undefined; 
    expect(toString(undefString)).toBe("");
  });
  test("should preserve sign of -0", () => {
    const minZero = -0; 
    expect(toString(minZero)).toBe("-0"); 
  });

  // stringify infinity 
  test("should stringify positive infinity", () => {
    const posInf = Infinity; 
    expect(toString(posInf)).toBe("Infinity")
  })
  test("should stringify negative infinity", () => {
    const negInf = -Infinity; 
    expect(toString(negInf)).toBe("-Infinity")
  })

  test("should return the input itself, when input is String", () => {
    const str = "Hello world"; 
    expect(toString(str)).toBe(str); 
  }); 

  test("should stringify positive numbers", () => {
    const posNum = 2; 
    expect(toString(posNum)).toBe("2"); 
  });
  test("should stringify negative numbers, preserving the sign", () => {
    const negNum = -2; 
    expect(toString(negNum)).toBe("-2"); 
  });
  test("should stringify negative zero, preserving the sign", () => {
    const negZero = -0; 
    expect(toString(negZero)).toBe("-0"); 
  });

  test("should stringify an array", () => {
    const arr1 = [1,2,3,4];
    const arr2 = [1, 2, 3, 4];
    expect(toString(arr1)).toBe(`${arr1}`); 
    expect(toString(arr2)).toBe(`${arr2}`); 
  });
  
  test("should ignore null values in an array", () =>{
    const arrWithNull = [1,2,null,4];
    expect(toString(arrWithNull)).toBe("1,2,,4"); 
  })

  test("should stringify a Symbol", () => {
    const sym = Symbol("symbol");
    expect(toString(sym)).toBe(`${sym}`); 
  });

  test("should return only value from object input", () => {
    const obj1 = { key: "value" }; 
    expect(toString(obj1)).toBe(`${obj1.value}`); 
  });

});
