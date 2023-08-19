# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    """
    二叉树的后序遍历，递归的形式
    """

    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        arr = []
        self.last_order(root, arr)

        return arr

    def last_order(self, root, arr):
        if root is None:
            return
        self.last_order(root.left, arr)
        self.last_order(root.right, arr)
        arr.append(root.val)
