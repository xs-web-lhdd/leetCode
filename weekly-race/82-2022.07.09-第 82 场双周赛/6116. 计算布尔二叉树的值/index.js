/**
 * @description 6116. 计算布尔二叉树的值
 * @author 氧化氢
 * @url https://leetcode.cn/contest/biweekly-contest-82/problems/evaluate-boolean-binary-tree/
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
 * @return {boolean}
 */
 var evaluateTree = function(root) {
  return dfs(root)
};

function dfs(root) {
  if(!root.left && !root.right) return root.val === 1 ? true : false

  var leftVal = dfs(root.left)
  var rightVal = dfs(root.right)

  if(root.val === 2) return leftVal || rightVal
  else return leftVal && rightVal
}