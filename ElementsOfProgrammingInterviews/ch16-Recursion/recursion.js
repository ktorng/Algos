// Chapter 16 Recursion

// Problem 16.1 - Towers of Hanoi Problem
function towerDriver(n) { // n is the number of pegs
    var stacks = [];      
    
    // Initialize stacks
    for(var i = 0; i < 3; i++) // assume 3 pegs
        stacks[i] = [];
    for(var i = n; i >= 0; i++)
        stacks[0].push(i);
    
    computeSteps(stacks, n, 0, 1, 2);
}

function computeSteps(stacks, n, src, to, temp) {
    // Move all but n-1 pegs from p1 to p3
    // move nth peg to p2
    // move p3(which has n-1pegs on it) to p2 
    if(n > 0) {
        computeSteps(stacks, n-1, src, temp, to);
        stacks[1].push(stacks[0].pop());
        computeSteps(stacks, n-1, temp, to, src);
    }
}

// Problem 16.2 - NQueens
function nQueensDriver(n) {
    var result = [];
    
    solveNQueens(result, n, 0, []);

    return result;

    function solveNQueens(result, n, row, colPlacement) {
        // row is a counter to ensure N elements in colPlacement
        if(row === n) {
            result.push(colPlacement.slice());
        } else {
            // Try placing a queen at every column for current row
            // If valid, continue down the recursion tree
            // Remove column placement prior to next iteration
            for(var col = 0; col < n; ++col) {
                colPlacement.push(col);
                if(isValid(colPlacement))
                    solveNQueens(result, n, row+1, colPlacement)
                colPlacement.pop();
            }
        }

        function isValid(colPlacement) {
            // Checks all the current positions vs the latest added
            // 0. Implicity there can be no row conflicts because each element in colPlacement represents a different row
            // 1. Checks if there is a column conflict
                // via diff === 0
            // 2. Checks if there is a diagonal conflict
                // via diff === lastRowIndex - i 
            var lastRowIndex = colPlacemient.length - 1;
            for(var i = 0; i < colPlacement.length; i++) {
                var diff = Math.abs(colPlacement[i] - colPlacement[lastRowIndex]);
                if(diff === 0 || diff === lastRowIndex - i) {
                    return false;
                }
            }

            return true;
        }
    }
}

// Problem 16.2 - Generate Permutations
function permutationDriver(arr) {
    var perms = [];

    computePermutations(arr, perms, 0);

    return perms;

    function computePermutations(arr, perms, i) {
        if(i === arr.length) perms.push(arr.slice());
        
        for(var j = i; j < arr.length; j++) {
            swap(A, i, j);
            computePermutations(arr, perms, i+1);
            swap(A, j, i);
        }
    }

    function swap(A, i, j) {
        var temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
}
