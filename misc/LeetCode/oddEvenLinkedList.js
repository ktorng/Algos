/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return null;

  // traverse once to count nodes and find tail
  let tail = head;
  let count = 1;
  while (tail.next) {
    tail = tail.next;
    count++;
  }

  // traverse again and remove even nodes and add to tail
  let curr = head;
  let i = 1;
  while (i < count && curr.next && curr.next.next) {
      // remove node
      const temp = curr.next;
      curr.next = curr.next.next;
      temp.next = null;

      // add to tail and update reference
      tail.next = temp;
      tail = temp;

      curr = curr.next;
      i += 2;
  }

  return head;
};
