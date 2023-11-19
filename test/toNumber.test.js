/**
 * @file This file contains unit tests for the toNumber function.
 */

/**
 * Test suite for toNumber function.
 */

import toNumber from '../src/toNumber';

describe("toNumber", () => {
  // constant values for Number minimum and maximum
  const maxValue = 1.7976931348623157e+308;
  const minValue = 5e-324; 

  // basics 
  test("returns converted number as a Number object", () => {
    expect(toNumber(2)).toBe(Number(2));
  })
  test("returns correct value, when Number literal MIN_VALUE is used", () => {
    expect(toNumber(Number.MAX_VALUE)).toBe(Number(maxValue));
  })
  test("returns correct value, when Number literal MAX_VALUE is used", () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(Number(minValue));
  })


  // input as string values 
  test("returns converted number when the input is number in string format", () => {
    expect(toNumber("2")).toBe(Number(2)); 
  })
  test("returns correct value for string infinity", () => {
    expect(toNumber("Infinity")).toBe(Number(Infinity));
  })
  test("returns correct value for string minus infinity", () => {
    expect(toNumber("-Infinity")).toBe(Number(Infinity));
  })


  // over and underflows, infinity literal
  test("returns correct value for infinity", () => {
    expect(toNumber(Infinity)).toBe(Number(Infinity));
  })
  test("returns correct value for minus infinity", () => {
    expect(toNumber(Infinity)).toBe(Number(Infinity));
  })
  test("returns infinity for number larger than maximum value", () => {
    expect(toNumber(maxValue + 2)).toBe(Number(Infinity));
  })
  test("returns minus infinity for number smaller than minimum value", () => {
    expect(toNumber(-maxValue -2)).toBe(Number(-Infinity));
  })

  // non-convertible inputs 
  test("returns NaN for non-convertible string", () => {
    expect(toNumber("3.3op")).toBe(Number(NaN));
  })
  test("returns NaN for non-convertible object", () => {
    const nonConvertibleObject = {firstDigit:2, secondDigit:3};
    expect(toNumber(nonConvertibleObject)).toBe(Number(NaN));
  })
  test("returns NaN for undefined", () => {
    expect(toNumber(undefined)).toBe(Number(NaN)); 
  })

})
