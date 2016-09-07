/*
  There is an 8x8 chessboard in which 2 diagonally opposite corners have
  been cut off. You are given 31 dominos, and a single domino can cover
  exactly 2 squares. Can you use the 31 dominos to cover the entire board?
  Prove why it's impossible.
*/

/*
  Solution
  ========
  8x8 chessboard means 32 black squares and 32 white squares

  Cutting off the diagonally opposite corners means we end up with
  30 of one color and 32 of the other color.

  1 domino always covers 1 black square and 1 white square. So, 31 dominos
  will cover 31 black squares and 31 white squares exactly.

  Therefore, impossible.
*/
