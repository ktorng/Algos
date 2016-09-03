/*
  check if a binary tree is balanced (i.e. the height of the
  two subtrees of any node never differ by more than one)
*/

// inefficient because of repeated calls to getHeight
function checkBalanced(root) {
  const getHeight = (node) => {
    if (!node) return 0; // base case
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  const isBalanced = (node) => {
    if (!node) return true; // base case

    // if diff in heights of left and right subtrees exceeds 1, return false
    if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
      return false;
    // else check both subtrees are balanced
    } else {
      return isBalanced(node.left) && isBalanced(node.right);
    }
  }

  return isBalanced(root);
}

// book solution
// check the height of each subtree as we recurse down from the root
// if subtree is balanced, return the actual height of the subtree
// if not balanced, return error code

// runs in O(N) time and O(H) space, where H is height of tree
function checkHeight(root) {
  if (!root) return -1;

  const leftHeight = checkHeight(root.left);
  if (leftHeight === -Infinity) return -Infinity; // pass error up

  const rightHeight = checkHeight(root.right);
  if (rightHeight === -Infinity) return -Infinity; // pass error up

  const heightDiff =  Math.abs(leftHeight - rightHeight);
  if (heightDiff > 1) {
    return -Infinity;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function checkBalancedSol(root) {
  return checkHeight(root) !== -Infinity;
}
