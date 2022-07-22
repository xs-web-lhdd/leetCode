/**
 * @description 剑指 Offer 18. 删除链表的节点
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  var cur = head,
    pre = cur.next
  // 防止  [4] 4  这种情况发生
  if (!pre) return null
  // 防止 [4,1,2,4,5] 4  这种情况发生
  if (cur.val === val) return cur.next
  while (pre) {
    if (pre.val === val) {
      cur.next = pre.next
      pre = cur.next
    } else {
      cur = cur.next
      pre = pre.next
    }
  }

  return head
};

export default deleteNode