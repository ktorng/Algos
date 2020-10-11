/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let first = l1;
  let second = l2;
  let sumHead;
  let currSumNode;
  let currSum;
  let carry = 0;

  while (first || second || carry) {
    currSum = sumHelper(first ? first.val : 0, second ? second.val : 0, carry);
    if (!sumHead) {
      sumHead = currSum[0];
      currSumNode = sumHead;
    } else {
      currSumNode.next = currSum[0];
      currSumNode = currSumNode.next;
    }
    carry = currSum[1];
    if (first) first = first.next;
    if (second) second = second.next;
  }

  return sumHead;
};

function sumHelper(val1, val2, carry) {
  let sum = val1 + val2 + carry;
  if (sum >= 10) {
    sum-= 10;
    carry = 1;
  } else {
    carry = 0;
  }

  return [new ListNode(sum), carry];
}
