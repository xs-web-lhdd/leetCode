/**
 * @description 95-不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
  function dfs(l, r) {
      var res = []
      if(l > r) return [null]

      for(var i = l; i <= r; i++) {
          var left = dfs(l, i - 1), right = dfs(i + 1, r)
          for(var m = 0; m < left.length; m++) {
              for(var n = 0; n < right.length; n++) {
                  var node = new TreeNode(i)
                  node.left = left[m]
                  node.right = right[n]
                  res.push(node)
              }
          }
      }

      return res
  }

  return dfs(1, n)
};