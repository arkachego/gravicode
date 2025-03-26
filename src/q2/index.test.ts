import { expect } from 'chai';
import { twoSum } from './index.js';

describe('Two Sum', () => {
  
  it('Numbers: [2, 7, 11, 15], Target: 9, Indices: [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.have.members([0, 1]);
  });

  it('Numbers: [3, 2, 4], Target: 6, Indices: [1, 2]', () => {
    expect(twoSum([3, 2, 4], 6)).to.have.members([1, 2]);
  });

  it('Numbers: [1, 5, 3, 4], Target: 5, Indices: [0, 3]', () => {
    expect(twoSum([1, 5, 3, 4], 5)).to.have.members([0, 3]);
  });

  it('Numbers: [-1, -2, -3, -4, -5], Target: -7, Indices: [2, 3]', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -7)).to.have.members([2, 3]);
  });

  it('Numbers: [0, 2, 4, 6, 0], Target: 0, Indices: [0, 4]', () => {
    expect(twoSum([0, 2, 4, 6, 0], 0)).to.have.members([0, 4]);
  });

  it('Numbers: [1, 2, 3, 4, 5], Target: 6, Indices: [1, 3]', () => {
    expect(twoSum([1, 2, 3, 4, 5], 6)).to.have.members([1, 3]);
  });

  it('should handle large inputs', () => {
    const nums = Array.from({ length: 1_000_001 }, (_, i) => i); 
    expect(twoSum(nums, 1_999_999)).to.have.members([999999, 1000000]);
  });

  it('should handle large numbers', () => {
    expect(twoSum([Number.MAX_SAFE_INTEGER, 1, 2], Number.MAX_SAFE_INTEGER + 1)).to.have.members([0, 1]);
  });

  it('should throw an error for no solution', () => {
    expect(() => twoSum([1, 2, 3, 4], 10)).to.throw('No two sum solution found.');
  });

});
