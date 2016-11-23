/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// brute force
/*
var maxArea = function(height) {
  if (height.length <= 2) {
    return Math.min(height[0], height[1]);
  }

  let max = 0;

  for (let i = 0; i < height.length; i++) {
    const left = [i, height[i]];
    for (let j = i+1; j < height.length; j++) {
      const right = [j, height[j]];
      const area = Math.min(left[1], right[1]) * (right[0] - left[0]);
      if (area > max) max = area;
    }
  }

  return max;
};
*/

// 2 pointers at each end
var maxArea = function(height) {
  if (height.length < 2) return null;

  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
