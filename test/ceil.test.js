/**
 * @file This file contains unit tests for the ceil function.
 */

/**
 * Tests the ceil function.
 */

import ceil from '../src/ceil';
/*
* Computes `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number.)
*
* @since 3.10.0
* @category Math
* @param {number} number The number to round up.
* @param {number} [precision=0] The precision to round up to.
* @returns {number} Returns the rounded up number.
* @example
*
* ceil(4.006)
* // => 5
*s
* ceil(6.004, 2)
* // => 6.01
*
* ceil(6040, -2)
* // => 6100
*/
describe("ceil", () => {

  it("ceils the value to higher integer when precision is 0", () => {
    const num = 3.005;
    const ceiled = 4;
    expect(ceil(num,0)).toBe(ceiled);
    expect(ceil(num)).toBe(ceiled); 
  })

  it("ceils the corresponding number or decimal (right to left), when precision is positive integer", () => {
    const floatNum1 = 3.00023;
    const ceiled1 = 3.01;
    const precision1 = 2; 
    expect(ceil(floatNum1,precision1)).toBe(ceiled1);
  })

  it("ceils the corresponding number or decimal (left to right), when precision is negative integer", () => {
    const floatNum2 = 3023;
    const ceiled2 = 3100;
    const precision2 = -2; 
    expect(ceil(floatNum2,precision2)).toBe(ceiled2);
  })

})

