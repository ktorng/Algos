/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // sliding window
  // traverse through s, while caching index seen of char
  // update max length

  let cache = {};
  let max = 0;
  let start = -1;

  for (let i = 0; i < s.length; i++) {
    // update starting index to not include previous occurrence
    if (cache[s[i]] !== undefined) start = Math.max(cache[s[i]], start);
    cache[s[i]] = i;
    max = Math.max(max, i - start);
  }

  return max;
};
