/*
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
*/

/*
 * @constructor
 */
var Stack = function() {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  this.q1.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  // if q1 is empty, dequeue q2 into q2 until size 1, then deq q2
  // if q2 is empty, dequeue q1 into q2 until size 1, then deq q1

  if (this.q1.length > 0) {
    while (this.q1.length > 1) this.q2.push(this.q1.shift());
    this.q1.shift();
  } else {
    while (this.q2.length > 1) this.q1.push(this.q2.shift());
    this.q2.shift();
  }
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  let temp;

  if (this.q1.length > 0) {
    while (this.q1.length > 1) this.q2.push(this.q1.shift());
    temp =  this.q1[0]; // peek at front
    this.q2.push(this.q1.shift());
    return temp;
  } else {
    while (this.q2.length > 1) this.q1.push(this.q2.shift());
    temp =  this.q2[0]; // peek at front
    this.q1.push(this.q2.shift());
    return temp;
  }
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return (this.q1.length === 0 && this.q2.length === 0);

};
