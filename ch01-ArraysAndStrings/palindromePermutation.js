// Given a string, check if it is a permutation of a palindrome
function palindromePermutation(str) {
  const count = str
    .split('')
    .map(e => e.toLowerCase())
    .filter(e => e !== ' ')
    .reduce((count, e) => {
      count[e] = count[e] + 1 || 1;
      return count;
    }, {});
  let oddCount = 0;

  // check that at most 1 char count is odd
  Object.keys(count).forEach(e => {
    if ((count[e] % 2) === 1) oddCount++;
  });

  return oddCount <= 1;
}

console.log(palindromePermutation('Tact Coa')); //=> true
console.log(palindromePermutation('asdfasdff')); //=> true
console.log(palindromePermutation('asdfasdffd')); //=> false
