/**
 * @description 112 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  // 没根节点直接返回
  if(!root) return false
  // 没有孩子节点就计算根节点值是否与目标值相等
  if(!root.left && !root.right) return targetSum === root.val
  targetSum -= root.val
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
  
};