/*
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

  Note:
  You must do this in-place without making a copy of the array.
  Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  // two pointers
  // first keeps track of earliest zero
  // second traverses

  let a = 0;
  let b = 0;
  let temp;

  while (a < nums.length - 1) {
    if (nums[a] === 0) {
      if (nums[b] === 0) {
        if (b === nums.length - 1) return;
        b++;
      } else {
        // swap
        temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
        a++;
      }
    } else {
      a++;
      if (b < a) b = a;
    }
  }
}

console.log(moveZeroes([0,1,0,3,12]))
