/**
 * @description 143 重排链表
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
var reorderList = function(head) {
  // 默认返回
  var l = 0, cur = head, stack = []
  while(cur) {
    l++
    stack.push(cur.val)
    cur = cur.next
  }
  
  if(l === 1 || l === 2) return head
  var i, j, newStack = []
  for(i = 0, j = stack.length - 1; ; i++, j--) {
    if(i === j) {
      newStack.push(stack[i])
      break
    }
    if(i > j) break;
    newStack.push(stack[i])
    newStack.push(stack[j])
  }
   
  var hair = new ListNode(-1), cur = hair
  for(i = 0; i < newStack.length; i++) {
    cur.next = new ListNode(newStack[i])
    cur = cur.next
  }
  head.next = hair.next.next
  
};