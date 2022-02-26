/**
 * @description 450 删除二叉搜索树中的节点
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
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key > root.val) {
    // 要删除的节点在右子树:
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    // 要删除的节点在左子树:
    root.left = deleteNode(root.left, key);
  } else {
    // 要删除的节点在根节点:
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let node = root.right;
    // 找到右子树中最左边的节点（最左边的节点最小啦，可以作为新树的根节点）
    while (node.left) {
      node = node.left;
    }
    // 然后把之前的左子树移动到刚找到的心根结点的左子树：
    node.left = root.left;
    root = root.right;
  }

  // 返回删除完的树：
  return root;
};