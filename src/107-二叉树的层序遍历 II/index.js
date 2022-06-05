/**
 * @description 107 叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var arr = []
  getResult(root, 0, arr)
  return arr.reverse()
};

var getResult = function(root, k, arr) {
  if(!root) return null
  if(k === arr.length) arr.push([])
  arr[k].push(root.val)
  getResult(root.left, k + 1, arr)
  getResult(root.right, k + 1, arr)
  return
}