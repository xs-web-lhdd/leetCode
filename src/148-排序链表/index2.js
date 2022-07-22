/**
 * @description 148-排序链表
 * @author 氧化氢
 */

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
 * @solution 这种写法是通过递归然后归并
 */
var sortList = function (head) {
  if (!head || !head.next) return head
  // 利用快慢指针知道中间节点，然后将其断开
  var slow = head
  var fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  var right = slow.next
  slow.next = null
  var left = head

  // 递归排序：
  var p = sortList(left)
  var q = sortList(right)
  // 合并两个节点：
  var hair = new ListNode(-1),
    cur = hair
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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export default sortList