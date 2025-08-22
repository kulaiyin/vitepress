// # 删除有序数组中的重复项 II

import { describe, it, expect } from "vitest";

function twoSum(nums: number[], target: number): number[] {
  return [];
}

describe("删除有序数组中的重复项 II", () => {
  let result: unknown;
  let expected: unknown;
  it("测试用例1", () => {
    result = twoSum([2, 7, 11, 15], 9);
    expected = [0, 1];
    expect(result).eql(expected);
  });
});
            