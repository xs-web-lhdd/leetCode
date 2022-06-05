# 105 从前序与中序遍历序列构造二叉树


太为难老夫了,差点给我送进去了,不过还好,核心还是递归,因为返回的是一棵二叉树,所以函数返回的要是根节点,所以要:
```js
// 构建树节点:
var head = new TreeNode(preorder[0])
head.left = buildTree(leftPreorder, leftInorder)
head.right = buildTree(rightPreorder, rightInorder)

return head
```

然后就是递归思想啦~~~