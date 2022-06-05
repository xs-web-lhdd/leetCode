/**
 * @description 103 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
  var arr = []
  getResult(root, 0, arr)

  return arr
};

var getResult = function(root, k, arr) {
  if(!root) return null
  if(arr.length === k) arr.push([])
  if(k % 2 === 0) {
    // 是偶数层：从左往右，层数从 0 开始
    arr[k].push(root.val)
  } else {
    // 是奇数层：从右往左遍历
    arr[k].unshift(root.val)
  }
  getResult(root.left, k + 1, arr)
  getResult(root.right, k + 1, arr)

  return
}