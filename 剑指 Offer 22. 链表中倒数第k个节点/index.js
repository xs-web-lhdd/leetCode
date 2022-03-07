/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  var fast = head
  while(k) {
      fast = fast.next
      k--
  }
  var slow = head
  while(fast) {
      slow = slow.next
      fast = fast.next
  }
  return slow
};