/*
  20 bottles of pills
  19 bottles have pills weighing 1.0 grams
  1 bottle has pills weighing 1.1 grams
  How to find the heavy bottle using 1 use of a scale?
*/

/*
  Solution
  ========
  Take 1 pill from bottle 1, 2 pills from bottle 2, ... 20 pills from bottle 20
  Find discepancy over 210.0 grams (sum of 1 * 1.0  + 2 * 1.0 ... 20 * 1.0)
  For example, if bottle 13 had the heavier pills, the total weight would be 211.3 g
*/
