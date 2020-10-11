/*
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  const result = [];
  let low, high;

  // traverse through array, keeping tracking of low and high ends of current range
  // if diff is 1, update high
  // else, push range to result and update low and high
  for (let i = 0; i < nums.length; i++) {
    if (low === undefined) {
      low = nums[i];
      high = nums[i];
    } else {
      if (nums[i] - high === 1) {
        high = nums[i];
      } else {
        result.push(low === high ? `${low}` : `${low}->${high}`)
        low = nums[i];
        high = nums[i];
      }
    }
  }

  // push last range to results
  result.push(low === high ? `${low}` : `${low}->${high}`)


  return result;
};
