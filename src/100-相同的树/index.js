/**
 * @deprecated 100 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {

// };

var isSameTree = function(p, q) {
  // 三种边界情况：
  if(!p && q) return false
  if(p && !q) return false
  if(!p && !q) return true
  // p q都存在情况：
  var aArr = [], bArr = []
  getRootVal(p, aArr)
  getRootVal(q, bArr)
  return aArr.join().includes(bArr.join())
};

var getRootVal = function(root, arr) {
  if(!root) return arr.push(null)
  arr.push(root.val)
  getRootVal(root.left, arr)
  getRootVal(root.right, arr)

  return
}