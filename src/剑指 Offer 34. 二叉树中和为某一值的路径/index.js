/**
 * @description 剑指 Offer 34. 二叉树中和为某一值的路径
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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
  if(!root) return []
  var res = []

  dfs(root, target, [], res)
  return res
};


function dfs(root, target, path, res) {
  if(!root) return false
  path.push(root.val)
  if(target === root.val && !root.left && !root.right) res.push(path)
  target = target - val
  dfs(root.left, target, path.slice(), res)
  dfs(root.right, target, path.slice(), res)
}