/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if(!head) return null
  let fast = head, slow = head;
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if(fast == slow) {
      let tmp = head
      while(slow != tmp) {
          slow = slow.next
          tmp = tmp.next
      }
      return tmp
    }
  }

  return null    
};

detectCycle()