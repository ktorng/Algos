/*
  BST was created by traversing an array from left to right and
  inserting each element. Given a BST with distinct elements,
  print all possible arrays that could have built that BST.

  ex: 2
     / \
   1    3

  output: [[2, 1, 3], [2, 3, 1]]
*/

function allSequences(node) {
  const result = [];

  if (!node) {
    result.push(new LinkedList());
    return result;
  }

  const prefix = new LinkedList();
  prefix.addToTail(node.value)

  // recurse on left and right subtrees
  const leftSeq = allSequences(node.left);
  const rightSeq = allSequences(node.right);

  // weave together each list from the left and right sides
  leftSeq.forEach(left => {
    rightSeq.forEach(right => {
      const weaved = [];
      weaveLists(left, right, weaved, prefix);
      result.concat(weaved);
    })
  })

  return result;
}

// weave lists together in all possible ways
// this algorithm works by removing the head from one list,
// recursing, and then doing the same thing with the other list
function weaveLists(first, second, results, prefix) {
  // if one list is empty, add remainder to [a cloned] prefix
  // and store result
  if (first.size() === 0 || second.size() === 0) {
    const result = prefix.clone();
    result.addAll(first);
    result.addAll(second);
    results.push(result);
  }

  // recurse with head of first added to the prefix
  // removing the head will damage first, so we'll need
  // to put it back where we found it afterwards
  const headFirst = first.removeHead();
  prefix.addToTail(headFirst);
  weaveLists(first, second, results, prefix);
  prefix.removeTail();
  first.addToHead(headFirst);

  // do the same thing with second, damaging and then
  // restoring the list
  const headSecond = second.removeHead();
  prefix.addToTail(headSecond);
  weaveLists(first, second, results, prefix);
  prefix.removeTail();
  second.addToHead(headSecond);
}
