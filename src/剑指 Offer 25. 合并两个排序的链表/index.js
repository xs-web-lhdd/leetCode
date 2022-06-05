/**
 * @deprecated 剑指 Offer 25. 合并两个排序的链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2
  if(!l2) return l1

  var hair = new ListNode(), first = hair
  var pre = l1, cur = l2
  while(pre || cur) {
    if(!pre) {
      first.next = cur
      return hair.next
    }
    if(!cur) {
      first.next = pre
      return hair.next
    }
    if(pre.val < cur.val) {
      first.next = pre
      pre = pre.next
      first = first.next
    } else {
      first.next = cur
      cur = cur.next
      first = first.next
    }
  }

  return hair.next
};