/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null
  // 创建一个虚拟头节点
  let hair = new ListNode(-1, head)
  let pre = hair,
    cnt = right - left + 1
  while (--left) {
    pre = pre.next
  }
  pre.next = reverseList(pre.next, cnt)
  return hair.next

};

var reverseList = function (head, length) {
  let pre = null,
    cur = head
  while (length--) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  head.next = cur
  return pre
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export default reverseBetween