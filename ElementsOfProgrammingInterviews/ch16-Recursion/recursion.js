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

// Problem 16.3 - Generate Permutations
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

// Problem 16.4 - PowerSet
function powerSetRecursiveDriver(A) {
    var powerSet = [];
    generatePowerSet(A, i, selected, powerset);
    return powerSet;

    function generatePowerSet(A, i, selected, powerset) {
        if(selected.length === A.length) {
            powerset.push(selected.slice());
            return;
        }
        // Generate powerset with the current element
        selected.push(A[i]);
        generatePowerSet(A, i+1, selected, powerset);
        // Generate the powerset without the current element
        selected.pop();
        generatePowerSet(A, i+1, selected, powerset);
    }
}

function powerSetRecursive(A) {
    if(A.length === 1) return [[], A[0]];

    var all = []; 

    for(var i = 0; i < A.length; i++) {
        var AwithoutI = A.slice();
        AwithoutI.splice(i, 1);
        var allSetsWithoutA = powerSetRecursive(AwithoutI);
        all.concat(allSetsWithoutA);
        allsetsWithoutA.forEach((s) => {
            s.concat(A[i]);
            all.concat(s);
        });
    }

    return all;
}

function powerSetDriverIterative(A) {
    var sets = [];
    for(var i = 0; i < Math.pow(2, A.length); i++) {
        var set = [];
        var j = 0;
        while((i >> j) & 1 !== 0) {
            set.push(A[j]);
            j++;
        }

        sets.push(set.slice());
    }

    return sets;
}

// Problem 16.5 - Generate all k-subsets
function generateKSubsetsDriver(k, n, set) {
    var subsets = [];
    generateKSubsets(n, k, set, 0, subsets);
    return subsets;

    function generateKSubsets(n, k, set, i, selected) {
        if(selected.length === k) {
            set.push(selected.slice());
            return;
        }

        for(var j = i; j < n; j++) {
            selected.push(set[j]);
            generateKSubsets(n, k, set, i+1, selected);
            selected.pop(set[j]);
        }
    }
}

// Problem 16.6 - Generate string of match parens
function generateMatchParens(k) {
    // 1. ( + s + )
    // 2. () + s
    // 3. s + ()
    var set = new Set();
    if(k === 0) return set.add("");

    var previousSet = generateMatchParens(k-1);
    previousSet.forEach((s) => {
        set.add('('+s+')');
        set.add('()' + s);
        set.add(s + '()');
    });

    return set;
}

// Problem 16.10 - Compute the Diameter of a tree
function computeHeightAndDiameter(root) {
    var diameter = Number.NEGATIVE_INFINITY;
    // Base case is heights array. If there are no root children, the for loop is skipped
    var heights = [0, 0];

    for(var e of root.edges) {
        var heightDiameter = computeHeightAndDiameter(e.root);

        // Manage the max height seen so far
        var heightWithRootLength = heightDiameter + e.length;
        if(heightWithRootLength > heights[0]) {
            heights[1] = heights[0];
            heights[0] = heightWithRootLength;
        } else if (heightWithRootLength > heights[1]) {
            heights[1] = heightWithRootLength;
        }
        
        // Keep max diameter seen
        diameter = Math.max(diameter, heightDiameter.diameter);
    }

    return {
        diameter: Math.max(diameter, heights[0] + heights[1]),  // either max diameter of children trees w/out root  OR max height of children trees + root edge
        height: height[0] // take the max height
    }
}
