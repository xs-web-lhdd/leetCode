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
 var isSymmetric = function(root) {
  if(!root) return true
  mirrorTree(root.right)
  return sameTree(root.left, root.right)
};

// 然后判断左右子树是否相等
function sameTree(A, B) {
  if(!A && !B) return true
  if(A && !B) return false
  if(!A && B) return false
  if(A.val !== B.val) return false
  return sameTree(A.left, B.left) && sameTree(A.right, B.right)
}

// 先把右子树反转了
var mirrorTree = function(root) {
  if(!root) return root
  var temp = root.left
  root.left = root.right
  root.right = temp
  mirrorTree(root.left)
  mirrorTree(root.right)
  
  return root
};