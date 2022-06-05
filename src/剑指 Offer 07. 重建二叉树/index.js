/**
 * @description 剑指 Offer 07. 重建二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if(!preorder.length || !inorder.length) return null
  // rootVal 为 3 
  var rootVal = preorder.splice(0, 1)
  var left = inorder.slice(0, inorder.indexOf(rootVal[0]))
  var right = inorder.slice(inorder.indexOf(rootVal[0])+1)

  var lLength = left.length
  // var rLength = right.length
  var leftPre = preorder.splice(0, lLength)
  var rightPre = preorder

  var root = new TreeNode(rootVal)
  root.left = buildTree(leftPre, left)
  root.right = buildTree(rightPre, right)

  return root
};


// 递归，拆分中序遍历