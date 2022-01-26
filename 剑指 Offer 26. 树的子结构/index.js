/**
 * @deprecated 剑指 Offer 26. 树的子结构
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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  var aArr = [], bArr = []
  getRootVal(A, aArr)
  getRootVal(B, bArr)

  return A.join().include(B.join())
};

var getRootVal = function(root, arr) {
  if(!root) return
  arr.push(root.val)
  getRootVal(root.left, arr)
  getRootVal(root.right, arr)

  return
}


// 有点问题！！！