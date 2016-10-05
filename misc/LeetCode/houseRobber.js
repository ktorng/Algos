/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // DP
  // 2-d array with rows for state: rob or don't rob
  // columns for nums of houses

  // ex: [5, 4, 3, 3]
  //        0   1   2   3   4
  //  yes   0   5   4   8   7
  //  no    0   0   5   5   8

  var dp = new Array(2);
  for (let i = 0; i < 2; i++) {
    dp[i] = new Array(nums.length + 1).fill(0);
  }

  for (let j = 1; j < nums.length + 1; j++) {
    // rob current house: current house + max of rob vs don't rob house 2 before
    dp[0][j] = nums[j-1] + Math.max(
      dp[0][j-2] ? dp[0][j-2] : 0,
      dp[1][j-2] ? dp[1][j-2] : 0
    );
    // do not rob current house: max of rob vs don't rob 1 house before
    dp[1][j] = Math.max(dp[0][j-1], dp[1][j-1]);
  }

  return Math.max(dp[0][nums.length], dp[1][nums.length]);
};
