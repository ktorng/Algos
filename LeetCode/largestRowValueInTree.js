/**
 * You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]
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
* @return {number[]}
*/
var largestValues = function(root) {
  const res = [];

  // DFS search and compare vals
  function compareVal(node, depth) {
    // handle null node
    if (!node) return;

    // if new depth, push node val into res array
    if (res[depth] === undefined) {
      res.push(node.val)
    } else {
      res[depth] = Math.max(res[depth], node.val);
    }

    // search both sides
    compareVal(node.left, depth + 1);
    compareVal(node.right, depth + 1);
  }

  if (root) compareVal(root, 0);

  return res;
};

/**
 * BFS
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  const res = [];

  // handle null case
  if (!root) return res;

  const q = [];

  // [node, depth] tuple
  q.push([root, 0]);

  while (q.length) {
    const c = q.shift();

    // if new depth, push node val into res array
    if (res[c[1]] === undefined) {
      res.push(c[0].val)
    } else {
      res[c[1]] = Math.max(res[c[1]], c[0].val);
    }

    if (c[0].left) q.push([c[0].left, c[1] + 1]);
    if (c[0].right) q.push([c[0].right, c[1] + 1]);
  }

  return res;
};
