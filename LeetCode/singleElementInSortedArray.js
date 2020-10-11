/**
 * Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10
Note: Your solution should run in O(log n) time and O(1) space.
 */

/**
* @param {number[]} nums
* @return {number}
*/
var singleNonDuplicate = function(nums) {
  // handle null/empty case
  if (!nums || !nums.length) return null;

  function search(low, high, midValue) {
    if (low === high) return nums[low];
    if (low === high - 1) {
      return nums[low] === midValue ?
        nums[high] :
        nums[low];
    }

    // find midpoint
    const mid = Math.floor((low + high) / 2);

    // for even mid
    // if mid + 1 === mid: single is on right
    // if mid - 1 === mid: single is on left
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        return search(mid + 1, high, nums[mid]);
      } else {
        return search(low, mid - 1, nums[mid]);
      }
    // for odd mid
    // if mid + 1 === mid: single is on left
    // if mid - 1 === mid: single is on right
    } else {
      if (nums[mid] === nums[mid + 1]) {
        return search(low, mid - 1, nums[mid]);
      } else {
        return search(mid + 1, high, nums[mid]);
      }
    }
  }

  return search(0, nums.length - 1);
};

// binary search

// [1 2 2]
// [1 1 2 2 3]
// base case:
// if 1 element: return that element
// if 2 element: return element !== mid


/**
1 1 2 2 3
l = 3
h = 4

1 1 2 2 3 3 4
l = 4
h = 6
*/
