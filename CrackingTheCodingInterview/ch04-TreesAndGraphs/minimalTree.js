/*
  given a sorted array with unique integer elements. write an
  algorithm to create a BST with minimal height
*/

function minimalBST(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return { value: arr[0] };
  // set root to midpoint of array
  const middle = Math.floor((arr.length - 1) / 2);

  // each node of BST is an object with
  // value, left and right properties

  // recursively build tree using each half as left and right
  // child BST's
  return {
    value: arr[middle],
    left: minimalBST(arr.slice(0, middle)),
    right: minimalBST(arr.slice(middle + 1))
  }
}

const bst = minimalBST([1,2,3,5,7,9]);
/*
      3
    /   \
  1      7
  \     / \
   2   5   9
*/

console.log(bst.value) //=> 3
console.log(bst.left.value) //=> 1
console.log(bst.right.value) //=> 7
console.log(bst.left.right.value) //=> 2
console.log(bst.right.left.value) //=> 5
console.log(bst.right.right.value) //=> 9
