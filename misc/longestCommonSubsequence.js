
// Naive Recursion Solution
// Time Complexity is O(2^(a+b)) aka exponential
function lcs(a, b, m, n) {
    if(m === 0 || n === 0) return 0;

    return a[m-1] == b[n-1] ? 1 + lcs(a, b, m-1, n-1) : Math.max(lcs(a, b, m-1, n), lcs(a, b, m, n-1));
}

// Dynamic Programming Solution
// Time Complexity is O(a*b)
function lcsDP(a, b) {
    var m = a.length;
    var n = b.length;

    var dp = new Array(m+1);
    for(var i = 0; i < dp.length; i++) {
        dp[i] = new Array(n+1).fill(0); // also handles base case where m = 0 or n =0
    }

    for(var i = 1; i <= m; i++) {
        for(var j = 1; j <= n; j++) {
            if(a[i-1] === b[j-1]) { // same
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    console.log(dp);

    return dp[m-1][n-1];
}
