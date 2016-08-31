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