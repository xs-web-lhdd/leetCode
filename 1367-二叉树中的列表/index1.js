/**
 * @description 1367-二叉树中的列表
 * @author 氧化氢
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSubPath = function(head, root) {
  var first = head
  var arr = []
  dfs(root, first.val, arr)

  for(var i = 0; i < arr.length; i++) {
    var nRoot = arr[i]
    if(compare(nRoot, head)) return true
  }

  return false
};

function dfs(root, target, arr) {
  if(!root) return
  if(root.val === target) arr.push(root)

  dfs(root.left, target, arr)
  dfs(root.right, target, arr)
}

function compare(root, head) {
  if(!head) return true
  if(root && root.val !== head.val) return false
  if(root) {
    if(compare(root.left, head.next) || compare(root.right, head.next)) return true
    else return false
  }
}