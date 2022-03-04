/**
 * @description 剑指 Offer 24. 反转链表
 * @author 氧化氢
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
 var reverseList = function(head) {
  if(!head) return head
  var hair = new ListNode()
  var cur = head, next = head.next, end = head
  while(next) {
      cur.next = hair
      hair = cur
      cur = next
      next = next.next
  }
  cur.next = hair
  end.next = null
  return cur
}; 