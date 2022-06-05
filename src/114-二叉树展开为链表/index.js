/**
 * @description 114-二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
  if(!root) return

  flatten(root.left)
  flatten(root.right)

  var left = root.left
  var right = root.right
  root.left = null
  root.right = left

  while(root.right !== null) {
      root = root.right
  }

  root.right = right
};
