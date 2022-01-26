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
  // 降序排列：
  arr.sort((x, y) => y - x)

  return arr[k-1]
};

var getRoot = function(root, arr) {
  if(!root) return
  arr.push(root.val)
  getRoot(root.left, arr)
  getRoot(root.right, arr)

  return
}