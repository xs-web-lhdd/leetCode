/**
 * @description 129-求根节点到叶节点数字之和
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
 var sumNumbers = function(root) {
  var list = []
  order(root, 0, list)
  var sum = 0
  for(var i = 0; i < list.length; i++) {
      sum += list[i]
  }

  return sum
};

function order(root, num, list) {
  if(!root) return 
  num = num * 10 + root.val
  if(!root.left && !root.right) {
      list.push(num)
  }

  root.left && order(root.left, num, list)
  root.right && order(root.right, num, list)
}