/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Notice that the solution set must not contain duplicate quadruplets.



Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [], target = 0
Output: []


Constraints:

0 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ans = [];
    const dp = Array(5).fill(0).map(() => Array(nums.length).fill(0).map(() => ({})))

    function search(i, target, k) {
        // base cases
        // found a solution
        if (!target && !k) {
            return [[]];
        }
        // no valid solution
        if (i === nums.length || (target && !k)) {
            return [];
        }
        if (dp[k][i][target]) {
            return dp[k][i][target];
        }

        // can take or not take current
        dp[k][i][target] = [
            ...search(i+1, target-nums[i], k-1).map((el) => [nums[i], ...el]),
            ...search(i+1, target, k)
        ];

        return dp[k][i][target];
    }


    return dedupe(search(0, target, 4));
};

function dedupe(arr) {
    const seen = new Set()
    const ans = []

    for (const el of arr) {
        const key = el.sort((a, b) => a - b).join('|')
        if (!seen.has(key)) {
            ans.push(el)
            seen.add(key)
        }
    }
    return ans
}

// SOLUTION
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSumSolution = function(nums, target) {
    nums.sort((a, b) => a - b)

    return kSum(nums, target, 4)

    function kSum(nums, target, k) {
        if (!nums.length || nums[0] * k > target || nums[nums.length-1] * k < target) {
            return []
        }
        if (k === 2) {
            return twoSum(nums, target)
        }
        let ans = []
        for (let i = 0; i < nums.length; i++) {
            // dedupe
            if (i === 0 || nums[i] !== nums[i-1]) {
                ans = ans.concat(
                    kSum(nums.slice(i+1), target-nums[i], k-1).map((el) => [nums[i], ...el])
                );
            }
        }
        return ans
    }

    function twoSum(nums, target) {
        const ans = []
        const seen = new Set()

        for (const n of nums) {
            // dedupe
            if (seen.has(target - n) && (!ans.length || ans[ans.length-1][1] !== n)) {
                ans.push([target - n, n])
            }
            seen.add(n);
        }

        return ans;
    }
};

