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
  let p = head, x = head  
  if(p.val !==val) {
    x = head
    while(p && p.next) {
      if(p.next.val === val) {
        p.next = p.next.next
      } else {
        p = p.next
      }
    }
  } else {
    while(p && p.val == val) {
      p = p.next
    }
    x = p
    while(p) {
      if(p && p.next && p.next.val === val) {
        p.next = p.next.next
      } else {
        p = p.next
      }
    }
  }

  return x
};