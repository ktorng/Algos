/*
  design an algorithm to find the first common ancestor of two
  nodes in a binary tree
  avoid storing additional nodes in a data structure
*/

function firstCommonAncestor(root, a, b) {
  // error check - one node is not in tree
  if (!isDescendant(root, a) || !isDescendant(root, b)) return null;

  return ancestorHelper(root, a, b);
}

function ancestorHelper(node, a, b) {
  if (node === a || node === b) return node;

  const aOnLeft = isDescendant(node, a);
  const bOnLeft = isDescendant(node, b);

  if (aOnLeft !== bOnLeft) { // a and b on different sides
    return node;
  } else if (aOnLeft) { // a and b on left side
    return ancestorHelper(node.left, a, b)
  } else { // a and b on right side
    return ancestorHelper(node.right, a, b)
  }
}

function isDescendant(ancestor, child) {
  if (ancestor === child) return true;
  if (!ancestor) return false;
  return isDescendant(ancestor.left, child) ||
    isDescendant(ancestor.right, child);
}
