// Naive recursive solution
// The W and n are changing
function knapSack(values, weights, W, n) {
    if(n === 0 || W === 0) return 0;

    if(weights[n-1] > W) return knapSack(values, weights, W, n-1);

    return Math.max(
        values[n-1] + knapSack(values, weights, W - weights[n-1], n-1),
        knapSack(values, weights, W, n-1)
    );
}

var val = [60, 50, 70, 30]
var wgt = [5,3,4,2];

console.time("ks");
var ans = knapSack(val, wgt, 5, val.length);
console.timeEnd("ks");
console.log(ans);

// Bottom-up Dynamic Programming SOlution
function knapSackDP(values, weights, W) {
    // Initialize DP 2D Array for bottom-up caching
    var maxValue = new Array(values.length+1);
    for(var i = 0; i < maxValue.length; i++)
        maxValue[i] = new Array(W+1).fill(0);

    for(var i = 1; i <= values.length; i++) {
        // Iterates through all the values
        for(var j = 1; j <= W; j++) {        // Iterates through all the weights from 1 to Wv
            if(weights[i-1] > j) {    
                maxValue[i][j] = maxValue[i-1][j];
            } else {
                maxValue[i][j] = Math.max(
                    values[i-1] + maxValue[i][j - weights[i-1]],
                    maxValue[i-1][j]
                );
            }
        }
    }
    console.log(maxValue);

    return maxValue[values.length][W];
}
