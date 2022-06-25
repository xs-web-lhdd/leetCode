/**
 * @description 515-在每个树行中找最大值
 * @author 氧化氢
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * @solution 一个深搜就完事了！！！
 */
 var largestValues = function(root) {
  if(!root) return []
  var ans = []
  var queue = [root]
  while(queue.length) {
      var length = queue.length
      var max = Number.MIN_SAFE_INTEGER
      for(var i = 0; i < length; i++) {
          var node = queue.shift()
          max = Math.max(max, node.val)
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      ans.push(max)
  }

  return ans
};

export default largestValues