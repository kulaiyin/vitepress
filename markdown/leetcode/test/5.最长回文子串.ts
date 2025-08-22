// # 最长回文子串

import { describe, it, expect } from "vitest";

function twoSum(nums: number[], target: number): number[] {
  return [];
}

describe("最长回文子串", () => {
  let result: unknown;
  let expected: unknown;
  it("测试用例1", () => {
    result = twoSum([2, 7, 11, 15], 9);
    expected = [0, 1];
    expect(result).eql(expected);
  });
});
            