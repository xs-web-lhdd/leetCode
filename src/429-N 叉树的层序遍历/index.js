/**
 * @description 429-N 叉树的层序遍历 
 * @author 氧化氢
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  var arr = []
  var queue = [root]
  if(!root) return []
  
  while(queue.length) {
      var length = queue.length
      var ceng = []
      for(var i = 0; i < length; i++) {
          var r = queue.shift()
          ceng.push(r.val)
          r.children.forEach(item => queue.push(item))
      }
      arr.push(ceng)
  }

  return arr
};