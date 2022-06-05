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
   * @return {ListNode}
   */
   var rotateRight = function(head, k) {
    // 头节点为空且旋转0个节点直接返回即可
    if(!head || k === 0) return head
    // 将链表变成环：
    var cur = head, size = 0
    while(cur) {
      size++
      if(cur.next === null) {
        cur.next = head
        break
      }
      cur = cur.next
    }
    // 走 m 步得到的是旋转链表的头节点，那么走 m-1 步就是循环链表的尾节点，然后将尾节点的下一个记录下来（头节点），然后将尾节点下一个变为null，返回头节点即可
    var m = size - (k % size), end = head
    for(let i = 0; i < m - 1; i++) {
      end = end.next
    }
    cur = end.next
    end.next = null
    
    return cur
  };