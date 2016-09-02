// Find a sequence in a 2D Array
function driver(A, seq) {
    var cache = {};
    for(var i = 0; i < A.length; i++) {
        for(var j = 0; j < A[0].length; j++) {
            if(findSequenceIn2DArray(A, seq, cache, i, j, 0)) return true;
        }
    }

    return false;
}

function findSequenceIn2DArray(A, seq, cache, i, j, k) {
    // Base cases
    var key = 'i' + i + 'j' + j + 'k' + k;

    if(cache[key]) return cache[key];
    if(k === seq.length) return true;
    if(i < 0 || i === A.length) return false;
    if(j < 0 || j === A[0].length) return false;

    // If element is part of the seq we're looking for, check u, d, l, r for next
    // If element is NOT, go to next
    if(A[i][j] === seq[k]) {
        return cache[key] = findSequenceIn2DArray(A, seq, cache, i+1, j, k+1) ||
                            findSequenceIn2DArray(A, seq, cache, i, j+1, k+1) || 
                            findSequenceIn2DArray(A, seq, cache, i-1, j, k+1) ||
                            findSequenceIn2DArray(A, seq, cache, i, j-1, k+1);
    }               

    return cache[key] = false;
}