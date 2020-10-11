/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  // keep track of maximum square side length whose bottom right corner is that cell position
  let cache = new Array(rows+1);
  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(cols+1).fill(0);
  }

  let maxLen = 0;

  for (let i = 1; i <= rows; i++) {
    for (let j= 1; j <= cols; j++) {
      if (matrix[i-1][j-1] === '1') {
        cache[i][j] = Math.min(cache[i-1][j], cache[i][j-1], cache[i-1][j-1]) + 1;
        maxLen = Math.max(cache[i][j], maxLen);
      }
    }
  }

  return maxLen * maxLen;
};
