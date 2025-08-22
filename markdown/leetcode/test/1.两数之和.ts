// # 两数之和

import { describe, it, expect } from "vitest";

// 时间复杂度O(n^2)，空间复杂度O(1)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  throw Error("No solution found.");
}

// 时间复杂度O(n)，空间复杂度O(n)
function twoSum1(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  throw Error("No solution found.");
}

describe("两数之和", () => {
  let result: unknown;
  let expected: unknown;
  it("测试用例1", () => {
    result = twoSum1([2, 7, 11, 15], 9);
    expected = [0, 1];
    expect(result).eql(expected);
  });

  it("测试用例2", () => {
    result = twoSum1([3, 2, 4], 6);
    expected = [1, 2];
    expect(result).eql(expected);
  });

  it("测试用例3", () => {
    result = twoSum1([3, 3], 6);
    expected = [0, 1];
    expect(result).eql(expected);
  });
});
