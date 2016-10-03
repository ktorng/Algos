/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.
*/
/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  // check length
  if (s.length !== t.length) return false;

  let count = {};

  // loop through s and cache counts
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = count[s[i]] + 1 || 1;
  }

  // loop through t and decrement counts in cache
  // if count does not exist or falls < 0, t contains extra letter, return false
  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]]) return false;
    count[t[i]]--;
    if (count[t[i]] < 0) return false;
  }

  return true;
}
