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
  var res = []
  if(!root) return res
  var stack = [root]
  while(stack.length) {
    root = stack.pop()
    res.unshift(root.val)
    if(root.left) stack.push(root.left)
    if(root.right) stack.push(root.right)
  }

  return res
};

