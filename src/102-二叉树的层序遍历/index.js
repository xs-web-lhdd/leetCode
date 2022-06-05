/**
 * @description 102-二叉树的层序遍历
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
 var levelOrder = function(root) {
  var arr = []
  layerOrderTraversal(0, arr, root)
  
  return arr
};

var layerOrderTraversal = function(k, arr, root) {
  if(!root) return
  if(arr.length-1 < k) arr.push([])
  arr[k].push(root.val)
  layerOrderTraversal(k+1, arr, root.left)
  layerOrderTraversal(k+1, arr, root.right)
}