/**
 * @deprecated 剑指 Offer 26. 树的子结构
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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
  if(!B || !A) return false
  if(A.val === B.val && isMatch(A, B)) return true
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isMatch = function(A, B) {
  if(!B) return true
  if(!A) return false
  if(A.val !== B.val) return false
  return isMatch(A.left, B.left) && isMatch(A.right, B.right)
}