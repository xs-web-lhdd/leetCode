/**
 * @description 160 相交链表
 * @author 氧化氢
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next; //链表A循环结束就循环链表B	
    pB = pB === null ? headA : pB.next; //链表A循环结束就循环链表B	
  }
  return pA; //当pA == pB时就是交点
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export default getIntersectionNode