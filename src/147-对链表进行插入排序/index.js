/**
 * @description 147-对链表进行插入排序
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
 */
var insertionSortList = function (head) {
  if (!head || !head.next) return head
  var hair = new ListNode(-9999)
  hair.next = head
  var cur = head.next
  var pre = hair.next
  while (cur) {
    var now = cur
    if (now.val >= pre.val) {
      cur = cur.next
      pre = pre.next
    } else {
      cur = cur.next
      pre.next = cur
      var p = hair
      while (p) {
        if (now.val < p.next.val) {
          now.next = p.next
          p.next = now
          break
        } else {
          p = p.next
        }
      }
    }
  }

  return hair.next
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export default insertionSortList