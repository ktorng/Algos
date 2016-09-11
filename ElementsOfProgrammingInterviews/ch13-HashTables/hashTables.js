// Chapter 13 - Hash Tables

// 13.1 - Test for palindromic permutations
function testPalindronmicPermutations(str) {
    var freq = {};
    for(var i = 0; i < str.length; i++) {
        freq[str[i]] = freq.hasOwnProperty(str[i]) ? freq[str[i]]++ : 1;
    }

    var keys = Object.keys(freq);
    var odds = 0;
    for(var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if(freq[key] % 2 !== 0 && ++odd > 1) {
            return false;
        }
    }

    return true;
}
