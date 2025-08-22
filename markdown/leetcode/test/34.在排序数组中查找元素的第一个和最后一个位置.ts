// # 在排序数组中查找元素的第一个和最后一个位置

import { describe, it, expect } from "vitest";

function twoSum(nums: number[], target: number): number[] {
  return [];
}

describe("在排序数组中查找元素的第一个和最后一个位置", () => {
  let result: unknown;
  let expected: unknown;
  it("测试用例1", () => {
    result = twoSum([2, 7, 11, 15], 9);
    expected = [0, 1];
    expect(result).eql(expected);
  });
});
            