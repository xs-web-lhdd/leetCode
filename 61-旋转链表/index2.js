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
    // 走 m 步到旋转后的头节点，然后从旋转后的头节点开始走，如果下一个节点是旋转后的头节点则将其next置为null，然后返回头节点即可
    var m = size - (k % size), first = head
    while(m--) {
      first = first.next
    }
    var end = first
    while(1) {
      if(end.next == first) {
          end.next = null
          break
      }
      end = end.next
    }
    
    return first
  };