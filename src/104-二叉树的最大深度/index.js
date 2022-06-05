/**
 * @description 104-二叉树的最大深度
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
 * @return {number}
 */
 var maxDepth = function(root) {
  return getMaxHeight(root, 0)
};

function getMaxHeight(root, height) {
  if(!root) return height
  return Math.max(getMaxHeight(root.left, height+1), getMaxHeight(root.right, height+1))
}