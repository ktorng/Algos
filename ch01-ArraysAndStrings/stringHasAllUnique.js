// determine if a string has all unique characters

function stringHasAllUnique(str) {
  // loop through str and keep track of counts in an object
  // loop through object to check that every count is 1
  // O(n) time
  const counts = str.split('').reduce((counts, e) => {
    counts[e] = counts[e] + 1 || 1;
    return counts;
  }, {});

  return Object.keys(counts).every(e => counts[e] === 1);
}

console.log(stringHasAllUnique('abcde')); // => true
console.log(stringHasAllUnique('abcdee')); // => false

// without additional data structures
// O(n^2) time
function stringHasAllUniqueB(str) {
  for (let i = 0; i < str.length; i++) {
    if (i !== str.lastIndexOf(str[i])) return false;
  }
  return true;
}

console.log(stringHasAllUniqueB('abcde')); // => true
console.log(stringHasAllUniqueB('abcdee')); // => false
