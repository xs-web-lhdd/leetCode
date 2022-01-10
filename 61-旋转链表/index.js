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
    var first = end = second = head
    let count = 0
    while(first) {
      count++
      if(first.next === null) {
        first.next = head
        break
      }
      first = first.next
    }
    let num = 1
    while(num++) {
      if(num * count > k) break
    }
    var endNum = last = num * count - k
    while(last--) {
      end = end.next
    }
    while(--endNum) {
      second = second.next
    }
    second.next = null
    return end
  };