/**
 * @description 116-填充每个节点的下一个右侧节点指针
 * @author 氧化氢
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
  if(!root) return root
  var queue = [root]
  while(queue.length) {
      var arr = []
      var length = queue.length
      for(var i = 0; i < length; i++) {
          var node = queue.shift()
          arr.push(node)
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      for(var i = 0; i < length; i++) {
          if(arr[i] && arr[i+1]) arr[i].next = arr[i+1]
          else arr[i].next = null
      }
      arr = []
  }

  return root
};