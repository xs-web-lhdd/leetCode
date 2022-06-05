/**
 * @description 剑指 Offer II 029. 排序的循环链表
 * @author 氧化氢
 */

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
 var insert = function(head, insertVal) {

  // 空链表插入一个：
  if(!head) {
      var node = new Node(insertVal)
      node.next = node
      return node
  }

  // 循环一圈链表，找到合适的位置进行插入：
  var slow = head, fast = head.next
  var flag = head
  while(fast !== flag) {
      if(slow.val <= insertVal && fast.val >= insertVal) {
          var node = new Node(insertVal)
          node.next = fast
          slow.next = node
          return head
      } else {
          fast = fast.next
          slow = slow.next
      }
      flag = head.next
  }

  // 所以节点的值都比插入值大或者小的情况，这个时候只需要找到最大值，然后插入到最大值后面即可
  var start = head, max = head, maxVal = head.val
  var first = head
  while(start.next !== first) {
      start = start.next
      if(start.val > maxVal) max = start
      first = head.next
  }
  var node = new Node(insertVal)
  node.next = max.next
  max.next = node
  return head


};



// 分两种情况，一种是所有值都比插入值大或者小，那么直接找到最大节点，插入到最大节点之后即可
// 另一种是有节点比插入节点大也有节点比插入节点小的情况，那么直接找到两个节点使满足比前一个节点大后一个节点小的情况，插入其中即可（这种可行是因为题上说连表是单调非递减列表）