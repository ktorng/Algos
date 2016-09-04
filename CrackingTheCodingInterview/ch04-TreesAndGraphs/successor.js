/*
  write an algorithm to find the "next" node
  (i.e. in-order successor) of a given node in a BST

  assume each node has a link to its parent
*/

/*
  solution: if node has a right subtree, return leftmost node
  of right subtree
  else, find closest parent where node is not to the right
  of the parent
    if n is rightmost already, should return null

  pseudocode solution
  ===================

  function successor(n) {
    if (n has a right subtree) {
      return leftmost node of right subtree
    } else {
      while (n.parent exists && n.parent.right === n) {
        n = n.parent;
      }
      return n.parent;
    }
  }
*/
