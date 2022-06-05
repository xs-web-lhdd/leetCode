/**
 * @description 86 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // 如果没有头节点直接返回
  if (!head) return head
  // 创建两个新的链表,一个是存小于x的节点,另一个是存大于等于x的节点
  var small = new ListNode(), big = new ListNode()
  var smallNode = small, bigNode = big, pre = head
  while(pre) {
    if(pre.val < x) {
      smallNode.next = pre
      smallNode = smallNode.next
      pre = pre.next
      smallNode.next = null
    } else {
      bigNode.next = pre
      bigNode = bigNode.next
      pre = pre.next
      bigNode.next = null
    }
  }
  // 将两个链表连接起来
  smallNode.next = big.next

  return small.next
};