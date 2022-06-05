/**
 * @description 501-二叉搜索树中的众数
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
 * @return {number[]}
 */
 var findMode = function(root) {
  var arr = []
  zhongXU(root, arr)

  var map = new Map()
  for(var i = 0; i < arr.length; i++) {
      if(map.has(arr[i])) {
          map.set(arr[i], map.get(arr[i]) + 1)
      } else {
          map.set(arr[i], 1)
      }
  }
  var max = 0, maxKey = null

  for(var [key, value] of map) {
      if(value > max) maxKey = key, max = value
  }

  var res = []
  for(var [key, value] of map) {
      if(value === max) res.push(key)
  } 

  return res
};

function zhongXU(root, arr) {
  if(!root) return
  
  zhongXU(root.left, arr)
  arr.push(root.val)
  zhongXU(root.right, arr)
}