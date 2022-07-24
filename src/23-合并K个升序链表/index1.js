/**
 * @description 23 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null
  var ans = lists[0]
  for (var i = 1; i < lists.length; i++) {
    ans = mergeTwoLists(ans, lists[i])
  }

  return ans
};


var mergeTwoLists = function (l1, l2) {
  var hair = new ListNode(-1),
    cur = hair
  var p = l1,
    q = l2
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