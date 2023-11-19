/**
 * @file This file contains unit tests for the defaultTo function.
 */

/**
 * Tests the defaultTo function.
 */

import defaultTo from '../src/defaultTo';


describe("defaultTo", () => {
  // return default if value is NaN, null or undefined
  const def = 2; 
  test("returns default value if value is NaN", () => {
    expect(defaultTo(NaN, def)).toBe(def);
  })
  test("returns default value if value is null", () => {
    expect(defaultTo(null, def)).toBe(def);
  })
  test("returns default value if value is undefined", () => {
    expect(defaultTo(undefined, def)).toBe(def);
  })
  
  // other inputs
  test("returns value if value is not NaN, null, or undefined", () => {

    // test with string input 
    const testStr = "hello";
    const testStrDefault = "default"; 
    expect(defaultTo(testStr,testStrDefault)).toBe(testStr); 

    // number input
    const testNum = 1; 
    const testNumDefault = 2; 
    expect(defaultTo(testNum,testNumDefault)).toBe(testNum);

    // boolean input
    const testBoolean = true; 
    const testDefBoolean = false; 
    expect(defaultTo(testBoolean, testDefBoolean)).toBe(testBoolean); 
    
    // array input
    const testArray = [1, 2]; 
    const testDefArray = []; 
    expect(defaultTo(testArray,testDefArray)).toBe(testArray); 

    // object input 
    const testObject = {}; 
    const testDefObject = { key: "value"};
    expect(defaultTo(testObject,testDefObject)).toBe(testObject); 
  });

})

