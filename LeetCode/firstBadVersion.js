/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/

/*
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/*
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /*
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      // binary search
      let low = 1;
      let high = n;
      let mid;

      while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (isBadVersion(mid)) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      return low;
    };
};
