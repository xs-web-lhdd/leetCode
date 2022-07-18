/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return null
  let hair = new ListNode(-1, head),
    pre = hair
  do {
    pre.next = reverseList(pre.next, k)
    for (let i = 0; i < k && pre; i++) {
      pre = pre.next
    }
    if (!pre) break
  } while (1);

  return hair.next
};

var reverseList = function (head, length) {
  // 不足 length 个节点，那就不翻转了
  let pre = head,
    cur = head,
    con = length
  while (--length && pre) {
    pre = pre.next
  }
  if (!pre) return head
  // 满足 length 个节点，翻转一下
  pre = null
  while (con--) {
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

export default reverseKGroup