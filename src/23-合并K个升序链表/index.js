/**
 * @description 23-合并K个升序链表
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
 var mergeKLists = function(lists) {
  var list = []
  for(var i = 0; i < lists.length; i++) {
      var arr = []
      var pre = lists[i]
      while(pre) {
          arr.push(pre.val)
          pre = pre.next
      }
      list = list.concat(arr)
  }

  list.sort((a, b) => a - b)
  
  var cur = new ListNode(-100), first = cur
  for(var i = 0; i < list.length; i++) {
      cur.next = new ListNode(list[i])
      cur = cur.next
  }

  return first.next
};