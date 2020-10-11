/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // greedy approach
  // traverse through nums array
  // update max index can jump to
  // return true if max index === last index
  // return false if max index === current index
  if (nums.length <= 1) return true;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(i + nums[i], max);

    if (max >= nums.length - 1) {
      return true;
    } else if (max === i) {
      return false;
    }
  }
};
