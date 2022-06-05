/**
 * @description 144 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  var arr = []
  pre_order(root, arr)
  return arr
};

var pre_order = function(head, arr) {
  if(!head) return null
  arr.push(head.val)
  pre_order(head.left, arr)
  pre_order(head.right, arr)
}