/**
 * @description 203-移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  if(!head) return null
  const arr = []
  var p = head
  while(p) {
    if(p.val !== val) {
      arr.push(p.val)
    }
    p = p.next
  }
  
  let first = hair = new ListNode(-1)
  for(var i = 0; i < arr.length; i++) {
    let node = new ListNode(arr[i])
    first.next = node
    first = first.next
  }

  return hair.next
};