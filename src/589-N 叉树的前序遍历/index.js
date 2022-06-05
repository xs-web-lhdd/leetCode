/**
 * @description 589 N 叉树的前序遍历
 * @author 氧化氢
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  var arr = []
  pre__order(root, arr)
  return arr
};

var pre__order = function(root, arr) {
  if(!root) return null
  arr.push(root.val)
  for(var i = 0; i < root.children.length; i++) {
      pre__order(root.children[i], arr)
  }
}