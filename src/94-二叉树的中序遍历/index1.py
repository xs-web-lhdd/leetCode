class Solution:
    """
    二叉树的中序遍历使用栈的形式
    """

    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        stack = []
        p = root
        q = None
        while p or len(stack):
            if p:
                stack.append(p)
                p = p.left
            else:
                q = stack.pop()
                res.append(q.val)
                p = q.right
        return res
