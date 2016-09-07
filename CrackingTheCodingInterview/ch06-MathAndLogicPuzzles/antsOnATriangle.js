/*
  Three ants on different vertices of a triangle
  What is the probability of collision (between any 2 or all of them) if they
  start walking on the sides of the triangle?
  Assume each ant randomly picks a direction, with either direction being
  equally likely to be chosen, and they all walk at the same speed.
  Similarly, find the probability of collision with n ants on a n-vertex
  polygon.
*/

/*
  Solution
  ========
  To avoid a collision, all ants must pick the same direction.

  n = # of sides = # of ants
  P(choosing a direction) = 0.5
  P(no collision) = P(first ant chooses any direction) * P(other ants choose same direction as first)
                  = 1 * (0.5)^(n-1)
  P(collision) = 1 - (0.5)^(n-1)
*/
