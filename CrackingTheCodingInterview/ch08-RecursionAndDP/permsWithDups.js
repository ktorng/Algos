/*
  Write a method to compute all permuations of a string whose characters
  are not necessarily unique. List of perms should not have duplicates.
*/

// create hash table to compute count of each character
// use hash table to generate permutations
// for each key in hash table, use as prefix, and then
// prefix + subproblem: generate permutations for remaining chars

function genPerms(str) {
  const counts = str.split('').reduce((res, e) => {
    res[e] = res[e] + 1 || 1;
    return res;
  });

  return genPermsHelper(counts, '', str.length, []);
}

function genPermsHelper(hash, prefix, remaining, result) {
  // base case
  if (remaining === 0) {
    result.push(prefix);
    return result;
  }

  // try remaining letters for next char, and generate remaining perms


}
