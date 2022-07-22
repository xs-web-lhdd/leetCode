/**
 * @description 148 排序链表
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
 * @solution 最猥琐的写法：变数组然后排序，接着新建链表
 */
var sortList = function (head) {
  if (!head) return null
  var arr = [],
    cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  // 按升序排列的数组：
  arr.sort((x, y) => x - y)
  var hair = new ListNode(-100),
    cur = hair
  for (var i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }


  return hair.next
};