/*
  given a binary tree, design an algorithm which creates
  a linked list of all the nodes at each depth
  (a tree with depth D will have D linked lists)
*/

// using DFS
function listOfDepths(root) {
  // array of linked lists
  const list = [];

  const buildList = (node, depth) => {
    // if LL doesn't exist at current depth, create it
    if (!list[depth]) list[depth] = new LinkedList();

    // add current node to LL at depth
    list[depth].addToTail(node);

    // traverse tree while incrementing depth
    if (node.left) buildList(node.left, depth + 1);
    if (node.right) buildList(node.right, depth + 1);
  }

  // start traversal at root at depth 0
  buildLists(root, 0);

  return list;
}
