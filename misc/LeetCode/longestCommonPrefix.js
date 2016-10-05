/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/*
 * @param {string[]} strs
 * @return {string}
 */

// horizontal scanning
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  let result = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(result) !== 0) {
      result = result.substring(0, result.length - 1);
      if (result.length === 0) return '';
    }
  }

  return result;
};

// vertical scanning
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || c !== strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};
