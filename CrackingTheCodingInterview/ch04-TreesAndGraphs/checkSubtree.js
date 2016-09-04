/*
  T1 and T2 are two very large binary trees, with T1 much bigger
  than T2 - create an algorithm to determine if T2 is a subtree
  of T1
*/

// traverse through T1
// each time node is found that matches T2 root,
// call matchTree to compare the two subtrees
function checkSubtree(T1, T2) {
  if (!T2) return true;
  if (!T1) return false;
  if (T1.value === T2.value && matchTree(T1, T2)) {
    return true;
  }

  return checkSubtree(T1.left, T2) || checkSubtree(T1.right, T2);
}

function matchTree(a, b) {
  if (!a && !b) { // nothing left in the subtree
    return true;
  } else if (!a || !b) { // exactly one tree is empty, therefore no match
    return false;
  } else if (a.value !== b.value) { // values don't match
    return false;
  } else {  // check both sides
    return matchTree(a.left, b.left) && matchTree(a.right, b.right);
  }
}
