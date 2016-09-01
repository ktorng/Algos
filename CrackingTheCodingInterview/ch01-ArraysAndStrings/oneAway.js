// three types of edits - insert a char, remove a char, replace a char
// given 2 strings, check if they are at most one edit away
function oneAway(strA, strB) {
  if (Math.abs(strA.length - strB.length) > 1) return false;
  // determine shorter str
  if (strA.length <= strB.length) {
    shortStr = strA;
    longStr = strB;
  } else {
    shortStr = strB;
    longStr = strA;
  }

  // count objects for each string
  const short = shortStr.split('').reduce((count, e) => {
    count[e] = count[e] + 1 || 1;
    return count;
  }, {});
  const long = longStr.split('').reduce((count, e) => {
    count[e] = count[e] + 1 || 1;
    return count;
  }, {});

  // check that differences between short and long do not exceed 1
  let diff = 0;

  Object.keys(short).forEach(e => {
    if (!long[e]) diff++;
  });

  return diff <= 1;
}

console.log(oneAway('pale', 'ple')); //=> true
console.log(oneAway('pales', 'pale')); //=> true
console.log(oneAway('pale', 'bale')); //=> true
console.log(oneAway('pale', 'bake')); //=> false
