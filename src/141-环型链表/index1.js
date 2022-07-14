/**
 * @descriptio 141 环形链表
 * @author 氧化氢
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * @solution 这个是哈希表的写法
 */
var hasCycle = function (head) {
  if (!head) return false
  let slow = head
  let map = new Map()
  while (slow) {
    if (map.has(slow)) return true
    map.set(slow, 1)
    slow = slow.next
  }

  return false
};