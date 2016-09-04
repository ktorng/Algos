/*
  implement a function to check if a binary tree is a BST
*/

// need to check that left <= node < right for all nodes
function validateBST(root) {
  return checkBST(root);
}

function checkBST(node, min, max) {
  if (!node) return true; // base case

  if (min && node.value <= min || max && node.value > max) {
    return false;
  }

  if (!checkBST(node.left, min, node.value) ||
    !checkBST(node.right, node.value, max)) {
    return false
  }

  return true;
}

/*
      3
    /   \
  1      7
  \     / \
   2   5   9
*/

const root = { value: 3 };
root.left = { value: 1 };
root.left.right = { value: 2 };
root.right = { value: 7 };
root.right.left = { value: 5 };
root.right.right = { value: 9 };

console.log(validateBST(root)); //=> true
root.right.left = { value: 10 };
console.log(validateBST(root)); //=> false
