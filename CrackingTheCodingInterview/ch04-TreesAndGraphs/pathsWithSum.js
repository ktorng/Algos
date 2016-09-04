/*
  given a binary tree, count the number of paths that sum
  to a given value
  path doesn't need to start at root or leaf, but must go
  downwards traveling only from parent nodes to children
*/

// brute force
function pathsWithSum(root, target) {
  let count = 0;

  const countPaths = (node, total) => {
    if (!node) return; // base case

    // if current total equals target, inc count
    const curr = total + node.value;
    if (curr === target) {
      count++;
    }

    // recurse into each side
    countPaths(node.left, curr);
    countPaths(node.right, curr);

    // start new paths from left and right
    countPaths(node.left, 0);
    countPaths(node.right, 0);
  }

  countPaths(root, 0);
  return count;
}
