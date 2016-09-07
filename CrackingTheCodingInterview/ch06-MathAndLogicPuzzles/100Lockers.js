/*
  100 closed lockers in a hallway
  open all 100
  then close every second locker
  then toggle every third lockers
  continue to toggle every i-th locker
  after 100th pass in the hallway, where only locker 100 is toggled
  How many lockers are open?
*/

/*
  Solution
  ========
  Numbers with an odd number of factors will end up open
  (e.g. squares like 9 (1, 3, 9))
  Therefore 10 lockers will be open, 1^2, 2^2, ... 10^2
*/
