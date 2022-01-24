/**
 * @description 94 二叉树的中序遍历
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
var inorderTraversal = function(root) {

};

var inorderTraversal = function(root) {
  var arr = []
  min_order(root, arr)
  return arr
};

var min_order = function(head, arr) {
  if(!head) return null
  min_order(head.left, arr)
  arr.push(head.val)
  min_order(head.right, arr)
}