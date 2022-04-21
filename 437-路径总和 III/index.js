/**
 * @description 437-路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
  var nodes = []
  traverse(root, nodes)
  console.log(nodes)
  var count = 0
  for(var i = 0; i < nodes.length; i++) {
    var arr = []
    getPath(nodes[i], 0, targetSum, arr)
    count += arr.length
  }

  return count
};

function traverse(root, nodes) {
  if(!root) return
  nodes.push(root)
  root.left && traverse(root.left, nodes)
  root.right && traverse(root.right, nodes)
}
 
function getPath(root, sum, targetSum, arr) {
  if(!root) return false
  sum += root.val
  
  if(sum === targetSum) arr.push(1)

  root.left && getPath(root.left, sum, targetSum, arr)
  root.right && getPath(root.right, sum, targetSum, arr)
}