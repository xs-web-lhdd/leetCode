/**
 * @deprecated 222 完全二叉树的节点个数
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
var countNodes = function(root) {
  return getResult(root, 0)
};

var getResult = function(root, k) {
  if(!root) return k = 0
  var l = getResult(root.left, k)
  var r = getResult(root.right, k)

  return l + r + 1
} 