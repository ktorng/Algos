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

// 13.2 - Character frequency counting in a small string and larger string
// Can smaller string (letter) be built from the characters in the larger string (magazine)
function canLetterBeConstructedFromMagazine(letter, magazine) {
    var freq = {};
    for(var i = 0; i < letter.length; i++)
        freq[letter[i]] = freq.hasOwnProperty(letter[i]) ? freq[letter[i]]++ : 1;

    for(var i = 0; i < magazine.length; i++) {
        var c = magazine[i];
        if(freq.hasOwnProperty(c)) freq[c] > 0 ? freq[c]-- : delete freq[c];
        var freqKeyLength = Object.keys(freq).length;
        if(freqKeyLength === 0) return true;
    }

    return Object.keys(freq).length === 0;
}

// 13.4 - Compute LCA optimizing for close ancestors
function optimizedLCA(n1, n2) {
    var seen = {};
    while(n1 !== null && n2 !== null) {
        // Store parents in a hash as you traverse upwards.
        // If there is already the node in the hash, then that node is the LCA
        if(n1 !== null) {
            if(seen[n1.data]) {
                return n1;
            } else {
                seen[n1.data] = true;
            }
            n1 = n1.parent;
        }
        
        if(n2 !== null) {
            if(seen[n2.data]) {
                return n2;
            } else {
                seen[n2.data] = true;
            }
            n2 = n2.parent;
        }
    }

    return null;
}
