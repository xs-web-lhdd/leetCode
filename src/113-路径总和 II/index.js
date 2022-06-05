/**
 * @description 113-路径总和 II
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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  var arr = [], list = []

  DFS(root, arr, list)
  var ans = []
  for(var i = 0; i < list.length; i++) {
    if(result(list[i]) === targetSum) ans.push(list[i])
  }
 
  return ans
};

function result(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

function DFS(root, arr, list) {
if(!root) return
  arr.push(root.val)
  if(!root.left && !root.right) {
    list.push(arr)
    return
  }
  root.left && DFS(root.left, arr.slice(0), list)
  root.right && DFS(root.right, arr.slice(0), list)
}