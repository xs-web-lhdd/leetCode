/**
 * @description 993-二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 * @method 深度搜索：求出所查找的节点的层级和父节点，如果是同一层级，并且父节点不是同一节点，那么就返回 true，否则返回 false
 */
 var isCousins = function(root, x, y) {
  var first, second, fFather, sFather
  function dfs(root, x, y, layer) {
  if(!root) return
  if(root.left && root.left.val === x) {
      first = layer
      fFather = root
      return
  }
  if(root.right && root.right.val === x) {
      first = layer
      fFather = root
      return
  }
  if(root.left && root.left.val === y) {
      second = layer
      sFather = root
      return
  }
  if(root.right && root.right.val === y) {
      second = layer
      sFather = root
      return
  }

  dfs(root.left, x, y, layer + 1)
  dfs(root.right, x, y, layer + 1)
}
  dfs(root, x, y, 0)
  console.log(first, second, fFather, sFather)
  if(first === second && fFather !== sFather) return true
  else return false
};



/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 * @method 广度搜索：求出所查找的节点的层级和父节点，如果是同一层级，并且父节点不是同一节点，那么就返回 true，否则返回 false
 */
 var isCousins = function(root, x, y) {
  var queue = [root]
  var xLayer, yLayer, xFather, yFather, j = 0
  while(queue.length) {
    var length = queue.length
    for(var i = 0; i < length; i++) {
      var node = queue.shift()
      if(node.left && node.left.val === x || node.right && node.right.val === x) xFather = node, xLayer = j
      if(node.left && node.left.val === y || node.right && node.right.val === y) yFather = node, yLayer = j
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    j++
  }

  return xLayer === yLayer && xFather !== yFather
};