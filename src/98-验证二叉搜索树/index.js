/**
 * @description 98-验证二叉搜索树
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
 var isValidBST = function(root) {
  var arr = []
  mid(root, arr)
  for(var i = 0; i < arr.length; i++) {
      if(arr[i] >= arr[i+1]) return false
  }

  return true
};

var mid = function(root, arr) {
  if(!root) return
  mid(root.left, arr)
  arr.push(root.val)
  mid(root.right, arr)
}