/*
Find the longest substring containing an equal number of hashes and stars within a string (e.g. given **##**####, the solution would be **##**##.
*/

// naive solution
// check longest substring starting at each position

// O(n^2)
function longestSubstring(string) {
  let maxSoFar = '';

  for (let i = 0; i < string.length; i++) {
    const longestAtThisIndex = longestSubstringFromStart(string.substring(i));
    if (longestAtThisIndex.length > maxSoFar.length) {
      maxSoFar = longestAtThisIndex;
    }
  }

  return maxSoFar;
}

// O(n)
function longestSubstringFromStart(string) {
  let countHash = 0;
  let countStar = 0;
  let max = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '#') {
      countHash++;
    } else {
      countStar++;
    }

    if (countHash === countStar) max = i;
  }

  return string.substring(0, max+1);
}

// cache
// O(n) time and O(n) space
function longestSubstringCache(string) {
  // loop through string, while tracking difference between number of hashes and stars
  // check first occurrence of that difference in cache, and update maxSoFar
  // difference can range between -n to n, where n is length of string
  // hash +
  // star -
  const cache = new Array(2 * string.length + 1);
  // diff:                  [-n, -n+1, ...0, ... n]
  // corresponding indices: [0,   1,   ...n, ... 2n]
  // initialize 0 diff at -1
  cache[string.length] = -1;

  let diff = 0;
  let maxSoFar = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '#') {
      diff++;
    } else {
      diff--;
    }

    console.log(i, diff, cache[string.length+diff])
    // if this diff has not occurred before, set it to current i
    if (cache[string.length + diff] === undefined) {
      cache[string.length + diff] = i;
    // if it has, check length and update maxSoFar
    } else {
      if (i - cache[string.length + diff] > maxSoFar.length) {
        maxSoFar = string.substring(cache[string.length + diff]+1, i+1);
      }
    }

    console.log(maxSoFar)
  }

  return maxSoFar;
