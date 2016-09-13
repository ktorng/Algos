/*
  Write a method to return all subsets of a set
*/

// recursive
function powerSetRecursive(arr) {
  if (arr.length === 0) return [[]]; // base case

  const last = arr.pop();
  const withoutLast = powerSet(arr);
  const withLast = withoutLast.map((e) => [...e, last]);

  return [...withoutLast, ...withLast];
}

console.log(powerSetRecursive([1, 2, 3]));
