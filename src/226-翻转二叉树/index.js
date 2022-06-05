/**
 * @description 226 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // 边界条件，节点为空就返回
  if(!root) return null
  // 反转左右节点：
  var tmp = root.left
  root.left = root.right
  root.right = tmp
  // 递归调用继续反转
  invertTree(root.left)
  invertTree(root.right)

  // 返回反转后的根节点：
  return root
};