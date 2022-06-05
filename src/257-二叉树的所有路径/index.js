/**
 * @description 257-二叉树的所有路径
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) { 
  if(!root) return []
  var arr = []
  getPath(root, `${root.val}`, arr)

  return arr
};

function getPath(root, path, arr) {
  if(!root) return
  if(!root.left && !root.right) arr.push(path)

  root.left && getPath(root.left, path + '->' + root.left.val, arr)
  root.right && getPath(root.right, path + '->' + root.right.val, arr)
}