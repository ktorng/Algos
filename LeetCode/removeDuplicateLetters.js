/*
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/



Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"


Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const counts = {};
    const stack = [];
    const seen = new Set();

    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = counts[s[i]] + 1 || 1;
    }
    // b c a b c
    // scan letters
    // for each letter existing in the stack, if there are remaining counts for it, and it is greater than current, pop
    // keep track of seen to prevent adding later dupes
    for (let i = 0; i < s.length; i++) {
        counts[s[i]]--;
        // do not add this dupe
        if (seen.has(s[i])) {
            continue;
        }
        while (stack.length && stack[stack.length-1] > s[i] && counts[stack[stack.length-1]] > 0) {
            const c = stack.pop();
            // unmark
            seen.delete(c);
        }
        stack.push(s[i]);
        seen.add(s[i]);
    }

    return stack.join('');
};

/*
b c a b c a
{
a: 0
b: 0
c: 0
}

{ a b }

[ a c ]
 */
