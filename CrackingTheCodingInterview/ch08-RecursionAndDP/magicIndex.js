/*
  A magic index in an array A[0...n-1] is defined to be an index such that
  A[i] = i. Given a sorted array of distinct integers, write a method to find
  a magic index, if one exists, in array A.

  Follow up: What if the values are not distinct?
*/

// brute force
function magicSlow(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return -1;
}

// binary search
function magicFast(arr) {

  function findMagic(start, end) {
    if (end < start) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);

    // index < value: magic index must be to the left of mid
    // because if we move index right 1, value increases by at least 1
    // so they can never match
    if (mid < arr[mid]) {
      return findMagic(start, mid - 1);
    // index > value: magic index must be to the right of mid
    } else if (mid > arr[mid]) {
      return findMagic(mid + 1, end);
    } else {
      return mid;
    }
  }

  return findMagic(0, arr.length - 1);
}


console.log(magicSlow([-5, -3, 2, 3, 5]))
console.log(magicFast([-5, -3, 2, 3, 5]))

// follow up: if duplicates exist
// if arr[mid] < mid, we cannot conclude which side the magic index is on
// however, we do know, for example, if arr[5] = 3, that arr[4] couldn't be
// a magic index because arr[4] must be <= arr[5]

function magicFastDup(arr) {

  function findMagic(start, end) {
    if (end < start) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);

    // if mid is magic, return it
    if (mid === arr[mid]) {
      return mid
    // else search both sides with adjustments
    } else {
      // search left
      const leftIndex = Math.min(mid - 1, arr[mid]);
      const left = findMagic(start, leftIndex);
      if (left >= 0) return left;

      // search right only if left not found
      const rightIndex = Math.max(mid + 1, arr[mid]);
      const right = findMagic(rightIndex, end);
      return right;
    }
  }

  return findMagic(0, arr.length - 1);
}

console.log(magicFastDup([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]));
