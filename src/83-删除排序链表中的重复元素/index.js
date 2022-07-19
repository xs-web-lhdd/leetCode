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
var deleteDuplicates = function (head) {
  if (!head) return head
  var pre = head,
    cur = head.next
  while (cur) {
    if (pre.val === cur.val) {
      cur = cur.next
      pre.next = cur
    } else {
      cur = cur.next
      pre = pre.next
    }
  }

  return head
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export default deleteDuplicates