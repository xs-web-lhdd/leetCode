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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
  var arr = []
  mid(root, arr)
  for(var i = 0; i < arr.length; i++) {
      var n = k - arr[i]
      if(arr.indexOf(n) !== -1 && arr.indexOf(n) !== i) return true
  }

  return false
};

function mid(root, arr) {
  if(!root) return
  mid(root.left, arr)
  arr.push(root.val)
  mid(root.right, arr)
}