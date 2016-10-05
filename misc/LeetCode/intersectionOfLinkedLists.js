/*
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;

  let lengthA = 0;
  let lengthB = 0;
  let first = headA;
  let second = headB;
  let long;
  let short;
  let diff;

  // find lengths of each list
  while (first) {
    lengthA++;
    first = first.next;
  }

  while (second) {
    lengthB++;
    second = second.next;
  }

  // get difference in lengths
  if (lengthA >= lengthB) {
    long = new ListNode(headA.val);
    long.next = headA;
    short = new ListNode(headB.val);
    short.next = headB;
    diff = lengthA - lengthB;
  } else {
    long = new ListNode(headB.val);
    long.next = headB;
    short = new ListNode(headA.val);
    short.next = headA;
    diff = lengthB - lengthA;
  }

  // start traversing short after long has traversed diff number of steps
  for (let i = 0; i < diff; i++) {
    long = long.next;
  }

  while (short) {
    if (short === long) return short;
    short = short.next;
    long = long.next;
  }

  return null;
};
