# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        return self.depth(root, 0)

    def depth(self, root, d):
        if root is None:
            return d
        d += 1
        leftDepth = self.depth(root.left, d)
        rightDepth = self.depth(root.right, d)

        return max(leftDepth, rightDepth)
