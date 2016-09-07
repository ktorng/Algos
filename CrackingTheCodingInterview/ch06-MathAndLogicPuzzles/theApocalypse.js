/*
  In the new post-apocalyptic world, the queen is desperately concerned about
  the birth rate. She decrees that all families should ensure that they have
  one girl or else they face massive fines. If all families abide by this policy
  (i.e. they continue to have children until they have one girl, at which point
  they stop), what will the gender ratio of the new generation be?

  Solve this out logically and then write a simulation of it.
  Assume 1/2 chance of boy or girl.
*/

/*
  Family will always have 1 girl

  Expected # of boys =
    0 * (1/2)^0 +
    1 * (1/2)^1 +
    2 * (1/2)^2 +
    ... +
    n * (1/2)^n

    = summation of (i / 2^i) from 0 to Infinity
    = 1

*/
