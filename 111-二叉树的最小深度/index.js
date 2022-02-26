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
 var minDepth = function(root) {
  return getMinHeight(root, 0)
};

function getMinHeight(root, height) {
  if(!root) return height
  if(!root.left) return getMinHeight(root.right, height+1)
  if(!root.right) return getMinHeight(root.left, height+1)
  return Math.min(getMinHeight(root.left, height+1), getMinHeight(root.right, height+1))
}