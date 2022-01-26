/**
 * @deprecated 剑指 Offer 54. 二叉搜索树的第k大节点
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
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
  var arr = []
  getRoot(root, arr)
  
  return arr[arr.length - k]
};

var getRoot = function(root, arr) {
  if(!root) return
  getRoot(root.left, arr)
  arr.push(root.val)
  getRoot(root.right, arr)

  return
}