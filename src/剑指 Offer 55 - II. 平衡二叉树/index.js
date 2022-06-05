/**
 * @description 剑指 Offer 55 - II. 平衡二叉树
 * @author 氧化氢
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
  if(!root) return true
  var left = TreeHeight(root.left, 1)
  var right = TreeHeight(root.right, 1)
  if(Math.max(left, right) - Math.min(left, right) > 1) return false
  
  if(isBalanced(root.left) === false || isBalanced(root.right) === false) return false
  return true
};

function TreeHeight(root, height) {
  if(!root) return height
  if(root.left || root.right) {
      return Math.max(TreeHeight(root.left, height+1), TreeHeight(root.right, height+1)) 
  }

  return height + 1
}