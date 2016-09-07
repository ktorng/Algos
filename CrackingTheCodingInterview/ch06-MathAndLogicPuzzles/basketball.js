/*
  You can play one of two games:
    Game 1: You get one shot to make the hoop
    Game 2: You get three shots and you have to make two of three shots

  If p is the probability of making a particular shot, for which values of p
  should you pick one game or the other?
*/

/*
  Solution
  ========
  Game 1: P(winning game) = p
  Game 2: P(winning game) = P(make all 3 shots) + P(make exactly 2 shots)
                          = p^3 + 3(p^2)(1-p)
                          = 3p^2 - 2p^3

  For Game 1 to be preferable over Game 2:
                  p > 3p^2 - 2p^3
    2p^3 - 3p^2 + p > 0
    (2p - 1)(p - 1) > 0
                  p > 0.5

  For Game 2 to be preferable over Game 1:
                  p < 0.5
*/
