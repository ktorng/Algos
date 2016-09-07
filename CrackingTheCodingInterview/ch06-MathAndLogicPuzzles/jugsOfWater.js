/*
  You have a 5-quart jug, 3-quart jug, and an unlimited supply of water
  How would you come up with exactly 4 quarts of water?
*/

/*
  Solution
  ========
  5Q = 5-quart jug
  3Q = 3-quart jug

  -Fill 3Q
  -Pour 3Q into 5Q (5Q has 3)
  -Fill 3Q
  -Pour 3Q into 5Q until 5Q is full (3Q has 1, 5Q has 5)
  -Dump out 5Q
  -Pour 3Q into 5Q (5Q has 1)
  -Fill 3Q
  -Pour 3Q into 5Q (5Q has 4)

  Note: if the two jug sizes are relatively prime, you can measure any
  value between one and the sum of the jug sizes
*/
