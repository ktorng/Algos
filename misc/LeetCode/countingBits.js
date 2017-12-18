/**
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 */

/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = num => {
  const dp = [0];

  for (let i = 1; i <= num; i++) {
    // biggest power of 2 <= index
    const offset = 2 ** Math.floor(Math.log2(i));

    dp[i] = dp[i - offset] + 1;
  }

  return dp;
};

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
// 0 1 1 2 1 2 2 3 1 2 2  3  2  3  3  4  1
// dp[0] = 0
// dp[1] = dp[0] + 1 = dp[1-1] + 1
// dp[2] = dp[0] + 1 = dp[2-2] + 1
// dp[3] = dp[1] + 1 = dp[3-2] + 1
// dp[4] = dp[0] + 1
// dp[5] = dp[1] + 1
// dp[6] = dp[2] + 1
// dp[7] = dp[3] + 1
// dp[8] = dp[0] + 1
// dp[9] = dp[1] + 1
// dp[10] = dp[2] + 1
// dp[11] = dp[3] + 1
// dp[12] = dp[4] + 1

// dp[n] = dp[n - biggest power of 2] + 1
