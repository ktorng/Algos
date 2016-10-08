/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/*
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.cacheSumToHere = new Array(nums.length);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.cacheSumToHere[i] = sum;
    }
    console.log(this.cacheSumToHere)
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.cacheSumToHere[j] - (this.cacheSumToHere[i-1] ? this.cacheSumToHere[i-1] : 0);
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
