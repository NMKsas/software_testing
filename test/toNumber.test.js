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
    expect(toNumber("-Infinity")).toBe(Number(-Infinity));
  })


  // over and underflows, infinity literal
  test("returns correct value for infinity", () => {
    expect(toNumber(Infinity)).toBe(Number(Infinity));
  });
  test("returns correct value for minus infinity", () => {
    expect(toNumber(-Infinity)).toBe(Number(-Infinity));
  });
  test("returns infinity for number larger than maximum value", () => {
    expect(toNumber(maxValue + 2)).toBe(Number(Infinity));
  });
  test("returns minus infinity for number smaller than minimum value", () => {
    expect(toNumber(-maxValue -2)).toBe(Number(-Infinity));
  });
  test("returns zero for zero value", () =>{
    expect(toNumber(0)).toBe(Number(0))
  }); 

  // parse numbers in binary, octal and hexadecimal systems
  test('should parse binary numbers', () => {
    expect(toNumber('0b1010')).toBe(10);
  });
  test('should return NaN when binary number is faulty', () => {
    expect(toNumber('0b21010')).toBe(NaN);
  });

  test('should parse octal numbers', () => {
    expect(toNumber('0o10')).toBe(8);
  });
  test('should return NaN when the octal number is faulty', () => {
    expect(toNumber('0o80')).toBe(NaN); 
  }); 

  test('should parse hexadecimal numbers', () => {
    expect(toNumber('0x10')).toBe(16);
  });
  test('should return NaN when the hexal number is faulty', () => {
    expect(toNumber('0xGA')).toBe(NaN); 
  }); 

  // non-convertible inputs 
  test("returns NaN for non-convertible string", () => {
    expect(toNumber("3.3op")).toBe(Number(NaN));
  });
  test("returns NaN for non-convertible object", () => {
    const nonConvertibleObject = Object(null);
    expect(toNumber(nonConvertibleObject)).toBe(Number(NaN));
  });
  

  test("returns NaN for non-convertible symbol", () => {
    const str = Symbol("This is Symbol")
    expect(toNumber(str)).toBe(Number(NaN)); 
  });
  test("returns NaN for undefined", () => {
    expect(toNumber(undefined)).toBe(Number(NaN)); 
  });

});
