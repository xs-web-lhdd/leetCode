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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
  if(!root) return null

  if(root.val > key) {
      root.left = deleteNode(root.left, key)
  } else if(root.val < key) {
      root.right = deleteNode(root.right, key)
  } else {
      if(!root.left) return root.right
      if(!root.right) return root.left

      var node = root.left
      while(node.right) node = node.right

      // 找到前驱节点
      var temp = node
      // 进行覆盖
      root.val = temp.val
      root.left = deleteNode(root.left, temp.val)
  }

  return root
};