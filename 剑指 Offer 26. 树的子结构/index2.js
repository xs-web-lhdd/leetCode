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
  //  题上说： 约定空树不是任意一个树的子结构，所以 B 为空就返回 false
  if(!B || !A) return false
  // 如果 A 与 B 匹配就返回true，否则说明 A 当前的根节点跟 B 的根节点不匹配，那么就要继续往下找 A 的孩子节点和 B 的根结点进行比较
  if(isMatch(A, B)) return true
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isMatch = function(A, B) {
  // 如果 B 是空树，那么 A 中必有空树，那么必相等就返回 true
  if(!B) return true
  // 如果 A 是空树，B 不是空树，那还比个 der ，不可能相等啦
  if(!A) return false
  // A 的根节点和 B 的根节点不等，那就说明不相等哇，那就是 false
  if(A.val !== B.val) return false
  // 剩下的这种情况就是 A 根节点和 B 根节点相等，这个时候还要比较 A 的左子树及右子树与 B 的左子树和右子树是否相等也就是继续比较
  return isMatch(A.left, B.left) && isMatch(A.right, B.right)
}