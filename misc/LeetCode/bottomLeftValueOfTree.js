/**
 * Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2:
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
 */

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
var findBottomLeftValue = function(root) {
  // DFS and replace result for each new max depth reached
  // O(n) time to traverse tree
  let res = root.val;
  let maxDepth = 0;

  function search(node, depth) {
    if (depth > maxDepth) {
      res = node.val;
      maxDepth++;
    }

    if (node.left) search(node.left, depth + 1);
    if (node.right) search(node.right, depth + 1);
  }

  search(root, 0);

  return res;
};
