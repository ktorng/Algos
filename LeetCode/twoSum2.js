/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

/*
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // since array is sorted, we can use two pointers from both sides
  // if low + high < target, inc low
  // if low + high > target, dec high

  // not zero-based index
  let low = 1;
  let high = numbers.length;

  while (low < high) {
    let curr = numbers[low-1] + numbers[high-1];
    if (curr < target) {
      low++;
    } else if (curr > target) {
      high--;
    } else {
      return [low, high];
    }
  }

  return null;
};
