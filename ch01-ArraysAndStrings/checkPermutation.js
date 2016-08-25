// given 2 strings, determine if one is a permutation of the other
function checkPermutation(strA, strB) {
  // reduce each str into count objects
  // check that objects are the same length and contain same counts for each char
  // O(n) time
  const countA = strA.split('').reduce((count, e) => {
    count[e] = count[e] + 1 || 1;
    return count;
  }, {});
  const countB = strB.split('').reduce((count, e) => {
    count[e] = count[e] + 1 || 1;
    return count;
  }, {});

  return (Object.keys(countA).length === Object.keys(countB).length &&
    Object.keys(countA).every(e => countA[e] === countB[e]));
}

console.log(checkPermutation('permutation', 'aioermuttnp')); // => true
console.log(checkPermutation('abcde', 'abcd')); // => false
