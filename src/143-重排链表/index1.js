/**
 * @description 143-重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  var middleNode = getMiddleNode(head)
  var rightList = getRigReverseList(middleNode.next)
  middleNode.next = null
  return mergerList(head, rightList)

  function getMiddleNode(head) {
    var slow = head
    var fast = head
    while (fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
    }

    return slow
  }

  function getRigReverseList(head) {
    var cur = head,
      pre = null
    while (cur) {
      var next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }


    return pre
  }

  function mergerList(l1, l2) {
    var cur = new ListNode(-1)
    var p = cur
    var p1 = l1
    var p2 = l2
    while (p1 && p2) {
      cur.next = p1
      p1 = p1.next
      cur = cur.next
      cur.next = p2
      p2 = p2.next
      cur = cur.next
    }
    // p1 长度可能大一
    if (p1) cur.next = p1

    return p.next
  }

  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
};


export default reorderList