/**
 * @description 404-左叶子之和
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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
  var res = []
  isGo(root, res)

  var sum = 0
  for(var i = 0; i < res.length; i++) {
      sum += res[i]
  }
  return sum
};

function isGo(root, arr) {
  if(!root) return

  if(root.left && isLeaf(root.left)) arr.push(root.left.val)
  
  isGo(root.left,arr)
  isGo(root.right,arr)
}

function isLeaf(root) {
  return !root.left && !root.right
}