/**
 * @deprecated 21 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 判断数组是否为空
  if(!l1) return l2
  if(!l2) return l1
  var stack = [], cur = l1
  while(cur) {
    stack.push(cur.val)
    cur = cur.next
  }
  cur = l2
  while(cur) {
    stack.push(cur.val)
    cur = cur.next
  }
  // 升序后的数组：
  stack.sort((x, y) => x - y)
  var hair = new ListNode(-100), cur = hair
  for(var i = 0; i < stack.length; i++) {
    cur.next = new ListNode(stack[i])
    cur = cur.next
  }


  return hair.next 
};