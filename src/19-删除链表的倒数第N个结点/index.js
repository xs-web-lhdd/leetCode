/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 判断 head 是否为空
  if (!head) return head
  // 
  var hair = new ListNode(-1, head),
    pre = hair,
    cur = head
  for (let i = 0; i < n; i++) {
    cur = cur.next
  }
  while (1) {
    if (cur === null) break;
    cur = cur.next
    pre = pre.next
  }
  pre.next = pre.next.next

  return hair.next
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export default removeNthFromEnd