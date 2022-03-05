/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 const levelOrder = root => {
  if (!root) return [];
  // 创建队列，并将根节点入队
  const queue = [root];
  const res = [];
  while (queue.length) {
      // 获取根节点，根节点出队
      const n = queue.shift();
      // 访问队头
      res.push(n.val);
      // 队头的子节点依次入队
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
  }
  return res;
};