/**
 * @description 958-二叉树的完全性检验
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
 * @return {boolean}
 */
 var isCompleteTree = function(root) {
  var arr = []
  var queue = [root]
  while(queue.length) {
    var floor = []
    var length = queue.length
    for(var i = 0; i < length; i++) {
      var node = queue.shift()
      if(node) floor.push(node.val), queue.push(node.left, node.right)
      else floor.push(null)
    }
    arr.push(floor)
  }

  // 拿出最后一层:
  var reciprocalOne = arr[arr.length - 2]

  // 对最后一层前面的每一层进行检测,如果一旦有包含 null 的直接返回 false
  for(var j = 0; j <= arr.length - 3; j++) {
    if(arr[j].includes(null)) return false
  }


  // 如果最后一层有节点不在左边返回 false
  var flag = false
  for(var i = 0; i < reciprocalOne.length; i++) {
    if(reciprocalOne[i] === null && !flag) flag = true
    if(flag && reciprocalOne[i] !== null) return false
  }

  return true
};