/**
 * @description 110 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  // 只要树高大于等于 0 都是平衡的,返回 -2 就是不平衡的
  return getHeight(root) >= 0
};

var getHeight = function(root) {
  if(!root) return 0
  var l, r
  // 拿到左右子树的树高：
  l = getHeight(root.left)
  r = getHeight(root.right)
  // 左子树或者右子树有一个不平衡：
  if(l < 0 || r < 0) return -2
  // 该节点不平衡：
  if(Math.abs(l - r) > 1) return -2
  // 返回树的树高:
  return Math.max(l, r) + 1
}