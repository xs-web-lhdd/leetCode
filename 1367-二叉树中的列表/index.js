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
 * @sulution 通过深度优先遍历，找出树中每一个节点和 head 头节点相等的节点记录下来，然后一个节点一个节点的进行比较
*/
 var isSubPath = function(head, root) {
  if(!head) return true
  if(!root) return false

  if(root.val === head.val && compare(root, head)) return true

  return isSubPath(head, root.left) || isSubPath(head, root.right)
};

function compare(root, head) {
  // 注意下面两条语句的顺序问题: 一种情况是 head 和 root 都比较到末尾了,这种情况是 true 的,所以要先判断 head 再判断 root
  if(!head) return true
  if(!root) return false

  // 不等直接返回 false
  if(root.val !== head.val) return false

  // 相等则继续向下比较
  return compare(root.left, head.next) || compare(root.right, head.next)
}