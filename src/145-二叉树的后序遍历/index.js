/**
 * @description 145 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  var res = new Array()

  return postorderTraversalNode(root, res)
};

var postorderTraversalNode = function(node, res) {
  if (node) {
    postorderTraversalNode(node.left, res)
    postorderTraversalNode(node.right, res)
    res.push(node.val)
  }
  
  return res
}