/**
 * @description 199-二叉树的右视图
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
 */
 var rightSideView = function(root) {
  if(!root) return root
  var queue = [root]
  var list = []
  while(queue.length) {
      var length = queue.length
      var arr = []
      for(var i = 0; i < length; i++) {
          var node = queue.shift()
          arr.push(node.val)
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      list.push(arr)
      arr = []
  }

  var ans = []
  for(var i = 0; i < list.length; i++) {
    ans.push(list[i][list[i].length - 1])
  }

  return ans
};
