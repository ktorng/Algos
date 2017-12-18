/**
 *
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.


Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 */

/**
* @param {number[][]} people
* @return {number[][]}
*/
var reconstructQueue = function(people) {
  // O(n log n) for sorting
  const sorted = people.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      if (a[1] < b[1]) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  const res = [];

  // O(n^2) for inserting
  sorted.forEach(p => {
    res.splice(p[1], 0, p);
  });

  return res;
};

// Sort by h descending
// Then insert into index by k
// We know k is the right place to insert because for each person inserted,
// the existing people in queue all have heights >= curr
