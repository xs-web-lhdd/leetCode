/**
 * @description 236 二叉树的最近公共祖先
 * @author 氧化氢
 */
// 常规解法，先分别找到 p 和 q 的路径节点入栈，最后一次比较两个栈，最后一个相等的节点返回即可。
var lowestCommonAncestor = function (root, p, q) {
  let pPath = [];
  let qPath = [];
  let stack = [];

  dfsSearch(root, p, stack, pPath);
  stack = [];
  dfsSearch(root, q, stack, qPath);

  let resNode = root;
  let i = 0;
  while (i < pPath.length && i < qPath.length) {
    if (pPath[i] === qPath[i]) {
      resNode = pPath[i];
    }
    i++;
  }
  return resNode;
};

var dfsSearch = function (node, target, stack, path) {
  if (node === null) return;
  stack.push(node);

  if (node === target) {
    // 这里注意不要直接 path = stack，这样会改变不到传入的 pPath，因为 path 指向了新的地址
    for (const el of stack) {
      path.push(el);
    }
    return;
  }

  dfsSearch(node.left, target, stack, path);
  dfsSearch(node.right, target, stack, path);
  stack.pop();
}