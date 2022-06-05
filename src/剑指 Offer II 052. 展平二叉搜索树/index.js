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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
  var arr = []
  min(root, arr)

  return buildTree(arr)
};

function buildTree(arr) {
  var root = new TreeNode(-100), hair = root
  while(arr.length) {
      var value = arr.shift()
      item = new TreeNode(value)
      root.right = item
      root = item
  }

  return hair.right
}

var min = function(root, arr) {
  if(!root) return
  min(root.left, arr)
  arr.push(root.val)
  min(root.right, arr) 
}