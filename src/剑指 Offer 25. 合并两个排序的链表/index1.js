/**
 * @description 剑指 Offer 25 合并两个排序的链表
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
var mergeTwoLists = function (l1, l2) {
  var hair = new ListNode(-1),
    cur = hair
  var p = l1,
    q = l2
  while (p && q) {
    if (p.val >= q.val) {
      cur.next = q
      q = q.next
    } else {
      cur.next = p
      p = p.next
    }
    cur = cur.next
  }

  cur.next = p ? p : q

  return hair.next
};