/**
 * @file This file contains unit tests for the filter function.
 */

/**
 * Tests the filter function.
 */

import filter from '../src/filter';

// placeholder for tests

describe("filter", () => {
  // returns always an array 
  test("should return an empty Array, when input array is empty", () => {
    const emptyArray = []; 
    const predicate1 = () => true; 
    const resultArray = filter(emptyArray, predicate1);
    expect(resultArray).toEqual([]); 
  })
  test("should return an empty Array, when input array is null", () => {
    const nullArray = null; 
    const predicate2 = () => true; 
    const result = filter(nullArray, predicate2);
    expect(result).toEqual([]); 
  })
  test("should return an empty Array when no elements match the predicate", () => {
    const inputArr = [1, 2, 3, 4, 5];
    const truePredicate = (value) => value > 10;
    const resultArray = filter(inputArr, truePredicate);
    expect(resultArray).toEqual([]);
  });

  // predicate is always true
  test("should return the same array when the predicate always returns true", () => {
    const numArray = [1, 2, 3, 4, 5];
    const predicate3 = () => true;
    const resultArray = filter(numArray, predicate3);
    expect(resultArray).toEqual(numArray);
  });

  // regular filtering with all different types 
  test("should return a filtered Array", () => {

    // numeric array
    const predicate4 = (value) => value > 3;
    const resultArray1 = filter(numArray, predicate4);
    expect(resultArray1).toEqual([6, 5]);

    // object array 
    const inputArr2 = [{firstItem : 1}, {secondItem : 2}, {thirdItem : 3}];
    const predicate5 = (keyValuePair) => keyValuePair.value <= 2;
    const resultArray2 = filter(inputArr2, predicate5);
    expect(resultArray2).toEqual([{firstItem : 1}, {secondItem : 2}]);

    // string array 
    const inputArr3 = ["apple", "banana", "cherry"];
    const predicate6 = (value) => value.length > 5;
    const resultArray3 = filter(inputArr3, predicate6);
    expect(resultArray3).toEqual(["banana", "cherry"]);
  });

})
