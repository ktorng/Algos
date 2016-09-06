// http://articles.leetcode.com/longest-palindromic-substring-part-i
// Manachers Algorithm
// https://leetcode.com/articles/longest-palindromic-substring/

// DP solution
var longestPalindrome = function(s) {
    var dp = new Array(s.length);
    // P(i,j) = P(i+1, j-1) && S[i] == S[j]
    // P(i,i) = 1
    // P(i, i+1) = S[i] == S[j]
    for(var i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length).fill(false);
    }
    
    for(var i = 0; i < dp.length; i++) {
        dp[i][i] = true;
    }
    
    var start = 0, maxLength = 1;
    for(var i = 0; i < dp.length - 1; i++) {
        if(s[i] === s[i+1]) {
            dp[i][i+1] = true;
            start = i;
            maxLength = 2;
        }
    }
    
    for(var len = 3; len <= dp.length; len++) {
        for(var i = 0; i <= dp.length - len; i++) {
            var j = i + len - 1;
            if(s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = true;
                maxLength = len;
                start = i;
            }
        }
    }

    return s.slice(start, start+maxLength-1);
};

// Expand from Center Solution
var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    
    for(var i = 0; i < s.length; i++) {
        var l1 = expandFromCenter(s, i, i);
        var l2 = expandFromCenter(s, i, i+1);
        var len = Math.max(l1, l2);
        console.log(i, len, l1, l2);
        if(len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return s.slice(start, end+1);
    
    function expandFromCenter(s, l, r) {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        
        return r - l - 1;
    }
};


// Manacher's Solution
var longestPalindrome = function(s) {
    var T = '^#' + s.split('').join('#') + '#$';
    var n = T.length;
    var P = new Array(n);
    var C = 0;
    var R = 0;
    
    // Bounds dont include sentinels at beginning and end
    for(var i = 1; i < n-1; i++) {
        var i_mirror = 2 * C - i; // currentLeftPosition
        // currentLeftPosition = 2 * centerPosition - currentRightPosition
        // currentRightPosition - centerPosition = centerPosition - currentLeftPosition
        // R - i = centerRightPosition - currentRight Position
        // i = currentRightPosition
        // C = centerPosition, R = centerRightPosition
        P[i] = (R > i) ? Math.min(R-i, P[i_mirror]) : 0; // R-i is max it can be. If i_mirror is bigger then its outside the palindrome centered on C
        
        // Attempt to expand palindrome centered at i
        while(T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
            P[i]++;
        }
        
        // If palindrome centered at i expands past R,
        // adjust center based on expanded palindrome
        if(i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
    }
    
    var maxLen = 0;
    var centerIndex = 0;
    for(var i = 1; i < n - 1; i++) {
        if(P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }
    
    var start = (centerIndex-1-maxLen)/2;
    return s.slice(start, start+maxLen);
};
