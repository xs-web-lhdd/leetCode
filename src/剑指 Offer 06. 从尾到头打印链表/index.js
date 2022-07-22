/**
 * @description 剑指 Offer 06. 从尾到头打印链表
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
 * @return {number[]}
 */
var reversePrint = function (head) {
  var arr = [],
    cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }

  return arr.reverse()
};

export default reversePrint