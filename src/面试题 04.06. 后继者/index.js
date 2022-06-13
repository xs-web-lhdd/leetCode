/**
 * @description 面试题 04.06. 后继者
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 var inorderSuccessor = function(root, p) {
  var arr = []
  mid(root, arr)
  console.log(arr)
  var index = arr.indexOf(p.val)
  var target = arr[index+1]
  var node = dfs(root, target)
  return node ? node : null
};

function dfs(root, target) {
  if(!root) return false
  if(root.val === target) return root
  return dfs(root.left, target) || dfs(root.right, target)
}

function mid(root, arr) {
  if(!root) return
  mid(root.left, arr)
  arr.push(root.val)
  mid(root.right, arr)
}