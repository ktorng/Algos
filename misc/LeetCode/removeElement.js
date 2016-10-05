/*
Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
*/

/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // move all target val to end of array in place
    // start two pointers at index 0
    // if first is target
    // inc second until not target
    // swap
    // inc first and second
    // else
    // inc first and second

    let first = 0;
    let second = 0;

    while (second < nums.length) {
      if (nums[first] === val) {
        while (nums[second] === val) second++;
        if (second < nums.length) {
          const temp = nums[first];
          nums[first] = nums[second];
          nums[second] = temp;
          first++;
          second++;
        }
      } else {
        first++;
        second++;
      }
    }

    // position of first pointer is new length
    return first;
};
