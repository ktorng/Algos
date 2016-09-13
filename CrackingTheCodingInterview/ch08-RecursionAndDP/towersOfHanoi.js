/*
  3 towers and N disks
  Puzzle starts with disks sorted in ascending order of size from top to bottom
    (1) Only one disk can be moved at a time
    (2) A disk is slid off the top of one tower onto another towers
    (3) A disk cannot be placed on top of a smaller disk
  Write a program to move the disks from the first tower to the last using stacks
*/

/*
  source, buffer, and destination stacks
  if we can move N-1 disks from source to destination, then we essentially we
  can also:
    -move N-1 disks from source to buffer
    -move N-th disk from source to destination
    -move N-1 disks from buffer to destination

  pseudocode
  ==========

  function moveDisks(n, source, dest, buffer) {
    // base case
    if (n <= 0) return;

    // move top n-1 disks from source to buffer, using dest as buffer
    moveDisks(n-1, source, buffer, dest);

    // move top from source to destination
    moveTop(source, dest);

    // move top n-1 disks from buffer to dest, using origin as buffer
    moveDisks(n-1, buffer, dest, source);
  }
*/


function moveDisks(n, source, dest, buffer) {
  if (n <= 0) return;

  moveDisks(n-1, source, buffer, dest);

  moveTop(source, dest);

  moveDisks(n-1, buffer, dest, source);
}

function moveTop(stack1, stack2) {
  stack2.push(stack1.pop());
}

const t1 = [5, 4, 3, 2, 1];
const t2 = [];
const t3 = [];

console.log([t1, t2, t3]);
console.log(moveDisks(5, t1, t3, t2));
console.log([t1, t2, t3]);
