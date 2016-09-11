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