/**
 * @deprecated 230 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var arr = []
  getRootArr(root, arr)

  return arr[k-1]
};

var getRootArr = function(root, arr) {
  if(!root) return
  getRootArr(root.left, arr)
  arr.push(root.val)
  getRootArr(root.right, arr)

  return
}