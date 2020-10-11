/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // cyclic replacement

  // for n number of elements, k number of shifts
  // start at i = 0
  // place nums[i] at position i+k and store nums[i+k] in temp
  // place temp in i+k+k and repeat
  // if it hits original index, increment index and repeat process
  n = nums.length;
  k = k % n;
  let count = 0;
  for (let start = 0; count < n; start++) {
    let curr = start;
    let prev = nums[start];
    do {
      const next = (curr + k) % n;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      curr = next;
      count++;
    } while (curr !== start)
  }
};
