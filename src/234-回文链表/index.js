/**
 * @description 234 回文链表
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
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  var cur = head, l = 0, pre = cur, firstStack = [], lastStack = []
  while(cur) {
    l++
    cur = cur.next
  }
  cur = head
  if(l === 1) return true
  if(l % 2) {
    // 是奇数
    for(var i = 0; i < parseInt(l / 2); i++) {
        firstStack.push(cur.val)
        cur = cur.next
    }
    cur = cur.next
    for(var i = 0; i < parseInt(l / 2); i++) {
        lastStack.unshift(cur.val)
        cur = cur.next
    }
    return firstStack.toString() == lastStack.toString()

  } else {
    // 是偶数
    for(var i = 0; i < parseInt(l / 2); i++) {
        firstStack.push(cur.val)
        cur = cur.next
    }
    for(var i = 0; i < parseInt(l / 2); i++) {
        lastStack.unshift(cur.val)
        cur = cur.next
    }
    return firstStack.toString() == lastStack.toString()
  }
  
};