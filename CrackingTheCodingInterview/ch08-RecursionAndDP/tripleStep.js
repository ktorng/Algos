/*
  A child is running up a staircase and can hop either 1 step, 2 steps, or 3 steps
  Implement a method that counts how many possible ways the child can run up the staircase
*/

// recursive
function tripleStep(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;

  return tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3);
}

// top down
function tripleStepTD(n) {
  const memo = new Array(n+1).fill(0);

  const countWays = (n) => {
    if (n < 0) {
      return 0;
    } else if (n === 0) {
      return 1;
    } else if (memo[n] > 0) {
      return memo[n];
    } else {
      memo[n] = countWays(n-1) + countWays(n-2) + countWays(n-3);
      return memo[n];
    }
  }

  return countWays(n);
}

console.log(tripleStepTD(3))
