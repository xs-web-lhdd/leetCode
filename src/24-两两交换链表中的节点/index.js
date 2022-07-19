/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 判断 head 是否为空
  if (!head) return head
  // 将相邻的两个链表进行反转
  var hair = new ListNode(-1, head),
    tmp = hair
  while (tmp.next && tmp.next.next) {
    var cur = tmp.next,
      pre = tmp.next.next
    cur.next = pre.next
    pre.next = cur
    tmp.next = pre

    tmp = tmp.next.next
  }
  // 然后返回链表
  return hair.next
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export default swapPairs