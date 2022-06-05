/**
 * @description 725 分隔链表
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  var l = 0, cur = head, pre = cur, result = new Array(k).fill(null), next, i, j
  while(cur) {
    l++
    cur = cur.next
  }
  cur = head
  if(l > k) {
    // 向下取整：1
    var interval = Math.floor(l / k)
    // 余数：1
    var remainder = l % k
    // 记录第几组：
    var group = 0
    // k 为几就循环几次：2
    for(i = 0; i < k; i++) {
      // 如果组数是小于剩余数量，那么该组就在平均数量上多一个
      if(group < remainder) {
        pre = cur
        for(j = 0; j < interval; j++) {
          cur = cur.next
        }
        group++
      } else {
        pre = cur
        for(j = 0; j < interval - 1; j++) {
          cur = cur.next
        }
      }
      next = cur.next
      cur.next = null
      cur = next
      result[i] = pre 
      pre = cur
    }
  }
  if(l <= k) {
    for(i = 0; i < l; i++) {
      pre = cur
      next = cur.next
      cur.next = null
      cur = next
      result[i] = pre
    }
  }

  return result
};

