/*
  Write a method to compute all permutations of a string of unique chars
*/

function permsWithoutDups(str) {
  if (str.length === 1) return [str];

  const first = str[0];
  const permsWithoutFirst = permsWithoutDups(str.slice(1));

  return permsWithoutFirst
    // map each permutation into array of new permutations with first char
    // inserted at each possible index
    .map((p) => {
      const res = [];
      for (let i = 0; i <= p.length; i++) {
        res.push(p.slice(0, i) + first + p.slice(i));
      }
      return res;
    })
  // flatten arrays
  .reduce((flat, arr) => [...flat, ...arr]);
}

console.log(permsWithoutDups('abcd'));
