// Naive recrusive solution 
// Problem : Starting at the top left of a 2D Array, how many paths are there to the bottom right 
//           when you can only move right or down from the current cell?
function arrayTraversal(m, n, i, j) {
    if(i === m) return 0;
    if(j === n) return 0;
    if(i === m-1 && j === n-1) return 1;
    if(i === 0 && j === 0) {    // Small speedup
        return 2 * arrayTraversal(A, i+1, j);
    } else {
        return arrayTraversal(A, i+1, j) + arrayTraversal(A, i, j+1); 
    }
}

function arrayTraversalDP(m, n) {
    // Create 2D Array for caching
    var dp = new Array(m);
    for(var i = 0; i < dp.length; i++)
        dp[i] = new Array(n).fill(0);

    // Fill in base case (trick)
    // Counts the number of paths to reach 1st row or 1st column
    for(var i = 0; i < m; i++)
        dp[i][0] = 1;
    for(var j = 0; j < n; j++)
        dp[0][j] = 1;

    // From the base, build bottom-up
    for(var i = 1; i < m; i++) {
        for(var j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[m-1][n-1];
}
