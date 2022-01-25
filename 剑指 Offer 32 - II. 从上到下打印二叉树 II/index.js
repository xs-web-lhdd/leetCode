/**
 * @description 剑指 Offer 32 - II. 从上到下打印二叉树 II
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var arr = []
  getResult(root, 0, arr)
  return arr
};
var getResult = function(root, k, arr) {
  if(!root) return null
  if(k === arr.length) arr.push([])
  arr[k].push(root.val)
  getResult(root.left, k + 1, arr)
  getResult(root.right, k + 1, arr)
  return
}