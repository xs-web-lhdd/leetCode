/**
 * @description 105 前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  // 前序遍历为空说明节点的左右孩子为空
  if(!preorder.length) return null
  // 根节点的值： 
  var root = preorder[0]
  // 中序遍历中根节点的索引：  
  var rootInin = inorder.findIndex(item => item === root)
  // 左孩子的中序遍历:
  var leftInorder = inorder.slice(0, rootInin)
  // 右孩子的中序遍历:
  var rightInorder = inorder.slice(rootInin + 1)
  // 左孩子前序遍历:
  var leftPreorder = []
  for(i = 0; i < leftInorder.length; i++) {
    leftPreorder.push(preorder[i+1])
  }
  // 右孩子前序遍历
  var rightPreorder = preorder.slice(leftPreorder.length + 1)
  
  // 构建树节点:
  var head = new TreeNode(preorder[0])
  head.left = buildTree(leftPreorder, leftInorder)
  head.right = buildTree(rightPreorder, rightInorder)

  return head
};