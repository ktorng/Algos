/*
  Bunch of people living on an island
  A visitor comes with a strange order: All blue-eyed people must leave asap
  There will be a flight out every morning
  Each person can see everyone else's eye color, but do not know their own
  No one is allowed to tell each other what eye color
  Total number of blue eyes is unknown, but at least one person does
  How many days will it take the blue-eyed people to leave
*/

/*
  Solution
  ========
  If there is 1 blue-eyed person, he is able to deduct he is the one since
  he sees no one else as blue-eyed, so he leaves on day 1

  If there are 2 blue-eyed, each one sees 1 other blue-eyed
  If BE1 sees BE2 does not leave on day 1, BE1 knows BE1 is blue-eyed
  They both leave on day 2

  If there are n blue-eyed, each one sees n-1 other blue-eyed
  If BE1 sees BE2 through BEn do not leave on day n-1, BE1 knows BE1 is blue-eyed
  They all leave on day n
*/
