/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
 */

 /**
  * @param {number[]} nums
  * @return {number[]}
  */
 var findDuplicates = function(nums) {
   const res = [];

   for (let i = 0; i < nums.length; i++) {
     // index to check
     const j = Math.abs(nums[i]);

     if (nums[j - 1] < 0) {
       res.push(j);
     } else {
       nums[j - 1] = -nums[j - 1];
     }
   }

   return res;
 };

// traverse array
// use indices as a cache to keep track of which numbers have already been seen
// by turning the value negative

// [4,3,2,7,8,2,3,1]
// [4,3,2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,-3,1]
// [4,-3,-2,-7,8,2,-3,-1]
// [4,-3,-2,-7,8,2,-3,-1] [2,3]
// [-4,-3,-2,-7,8,2,-3,-1] [2,3]
