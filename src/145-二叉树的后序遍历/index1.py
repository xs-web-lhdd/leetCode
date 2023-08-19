
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    """
    二叉树的后序遍历，使用栈的方式
    """

    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        if root is None:
            return res
        stack = [root]
        while len(stack):
            root = stack.pop()
            res = [root.val] + res
            if root.left:
                stack.append(root.left)
            if root.right:
                stack.append(root.right)

        return res
