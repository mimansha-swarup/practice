/*
Given an array of integers nums and an integer target. 
Return the indices(0 - indexed) of two elements in nums such that they add up to target.

Each input will have exactly one solution, and the same element cannot be used twice. 
Return the answer in increasing order.


Examples:
Input: nums = [1, 6, 2, 10, 3], target = 7

Output: [0, 1]

Explanation: nums[0] + nums[1] = 1 + 6 = 7


Input: nums = [1, 3, 5, -7, 6, -3], target = 0

Output: [1, 5]

Explanation: nums[1] + nums[5] = 3 + (-3) = 0




*/

class Solution {
  twoSum(nums, target) {
    let i = 0;
    const obj = {};
    while (i < nums.length) {
      const needed = target - nums[i];
      if (Number.isInteger(obj[needed])) return [obj[needed], i];
      obj[nums[i]] = i;
      i++;
    }
    return [-1, 1];
  }
}
