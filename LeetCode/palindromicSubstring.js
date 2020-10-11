/**
 Given a string, your task is to count how many palindromic substrings in this string.

 The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

 Example 1:
 Input: "abc"
 Output: 3
 Explanation: Three palindromic strings: "a", "b", "c".
 Example 2:
 Input: "aaa"
 Output: 6
 Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 Note:
 The input string length won't exceed 1000.
 */

/**
* @param {string} s
* @return {number}
*/
var countSubstrings = function(s) {
   let count = 0;
   // loop through array
   for (let i = 0; i < s.length; i++) {
       // check for palindromes centered around this char
       countPalindromes(i, i);

       // check for palindromes centered aroud this char and this char + 1
       countPalindromes(i, i + 1);
   }

   function countPalindromes(a, b) {
       // out of bounds
       if (a < 0 || b >= s.length) {
           return;
       }

       if (s[a] === s[b]) {
           count++;
           countPalindromes(a - 1, b + 1);
       }
   }

   return count;
};
