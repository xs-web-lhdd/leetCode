/**
 * @description 138 复制带随机指针的链表
 * @author 氧化氢
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // 判断链表是否为空
  if (!head) return head
  var p = head, q
  // 克隆每一个节点,并将克隆的节点接在原节点后面
  while(p) {
    q = new Node(p.val)
    q.random = p.random
    q.next = p.next
    p.next = q
    p = q.next
  }
  // 将克隆节点的 random 指向克隆节点本身
  p = head.next
  while(p) {
    p.random && (p.random = p.random.next)
    (p = p.next) && (p = p.next) 
  }
  // 将克隆节点从链表中单独抽离出来
  p = q = head.next
  while(q.next) {
    head.next = head.next.next
    q.next = q.next.next
    head = head.next
    q = q.next
  }
  head.next = null

  return p
};