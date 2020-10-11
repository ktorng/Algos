/*
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  // two pointers
  // start second n places after first
  // traverse until second reaches tail
  // remove first.next

  let first = head;
  let second = head;

  for (let i = 0; i < n; i++) {
    second = second.next;
  }

  while (second && second.next) {
    first = first.next;
    second = second.next;
  }

  if (!second && first === head) {
    head = head.next;
  } else {
    if (first.next && first.next.next) {
      first.next = first.next.next;
    } else {
      first.next = null;
    }
  }

  return head;
};
