/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return compareTrees(flipTree(root.left), root.right);
};

// mirrors a tree
function flipTree(root) {
  if (!root) return null;
  let newRoot = new TreeNode(root.val);
  if (root.right) newRoot.left = flipTree(root.right);
  if (root.left) newRoot.right = flipTree(root.left);

  return newRoot;
}

// compares two trees recursively
function compareTrees(a, b) {
  if (!a && !b) return true; // base case
  if (a && !b || !a && b) return false;
  if (a.val !== b.val) return false;

  return compareTrees(a.left, b.left) && compareTrees(a.right, b.right);
}
