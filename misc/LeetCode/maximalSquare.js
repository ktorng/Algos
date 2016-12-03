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
  // start from bottom right
  // traverse left and up until reach top left
  // keep track of biggest square possible at each position
  // cache results to prevent re-calculation
  let cache = new Array(matrix.length);
  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(matrix[0].length);
  }

  // returns the biggest square possible at a location
  function maximalSquareHelper(i, j) {
    // if out of bounds
    if (i >= matrix.length || j >= matrix[0].length) return 0;

    // else check the positions (i+1, j) (j+1, i) (i+1, j+1)
    if (!cache[i+1][j]) cache[i+1][j] = maximalSquareHelper(i+1,j);
    if (!cache[i][j+1]) cache[i][j+1] = maximalSquareHelper(i,j+1);
    if (!cache[i+1][j+1]) cache[i+1][j+1] = maximalSquareHelper(i+1,j+1);

    const down = cache[i+1][j];
    const right = cache[i][j+1];
    const diag = cache[i+1][j+1];

    // check if current position is 1 and can create a bigger square
    if (matrix[i][j] === 1 && down === right === diag) {
      return Math.pow((Math.sqrt(down) + 1), 2);
    // else return the biggest square existing from the 3 positions
    } else {
      return Math.max(down, right, diag);
    }
  }

  return maximalSquareHelper(0, 0);
};
